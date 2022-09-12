// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.0;
import "../node_modules/@openzeppelin/contracts/token/ERC721/IERC721.sol";

contract Marketplace {

    address payable public immutable feeAccount; 
    uint public immutable feePercent;  
    uint public itemCount; 

    struct Item {
        uint itemId;
        IERC721 nft;
        uint tokenId;
        uint price;
        string name;
        string image;
        string desc;
        address payable seller;
        bool sold;
    }


    mapping(uint => Item) public items;

    constructor(uint _feePercent) {
        feeAccount = payable(msg.sender);
        feePercent = _feePercent;
    }

    function makeItem(IERC721 _nft, uint _tokenId, uint _price, string memory _name, string memory _image, string memory _desc) external {
        require(_price > 0, "Price must be greater than zero");
        itemCount ++;
        _nft.transferFrom(msg.sender, address(this), _tokenId);
        items[itemCount] = Item (
            itemCount,
            _nft,
            _tokenId,
            _price,
            _name,
            _image,
            _desc,
            payable(msg.sender),
            false
        );
    
    }

    function getTotalPrice(uint _itemId) view public returns(uint){
        return((items[_itemId].price*(100 + feePercent))/100);
    }

    function purchaseItem(uint _itemId) external payable {
        uint _totalPrice = getTotalPrice(_itemId);
        Item storage item = items[_itemId];
        require(_itemId > 0 && _itemId <= itemCount, "item doesn't exist");
        require(msg.value >= _totalPrice, "not enough ether to cover item price and market fee");
        require(!item.sold, "item already sold");

        item.seller.transfer(item.price);
        feeAccount.transfer(_totalPrice - item.price);

        item.sold = true;
        
        item.nft.transferFrom(address(this), msg.sender, item.tokenId);

    }
    
}