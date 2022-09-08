const main = async () => {
  const marketPlaceFactory = await hre.ethers.getContractFactory("Marketplace");
  const marketPlaceContract = await marketPlaceFactory.deploy(1);

  await marketPlaceContract.deployed();

  console.log("MarketPlace address: ", marketPlaceContract.address);

  const nftFactory = await hre.ethers.getContractFactory("NFT");
  const nftContract = await nftFactory.deploy();
  await nftContract.deployed();
  console.log("NFT address: ", nftContract.address);
};

const runMain = async () => {
  try {
    await main();
    process.exit(0);
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

runMain();