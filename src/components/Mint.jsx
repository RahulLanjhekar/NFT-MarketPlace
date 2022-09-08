const Mint = () => {
    const commonStyles = 'glass-window outline-none p-2 w-[300px] mb-8 rounded'
    
  return (
      <div className="mt-8 w-screen text-center">
            <div className="flex flex-col justify-center items-center glass-window w-[400px] h-[500px] rounded-xl mx-auto">  
              <input
                type="file"
                className={commonStyles}
                required
                name="file"
                onChange={uploadToIPFS}
              />
              <input className={commonStyles} size="lg" required type="text" placeholder="Name" />
              <input className={commonStyles} size="lg" required as="textarea" placeholder="Description" />
              <input className={commonStyles} size="lg" required type="number" placeholder="Price in ETH" />
              <div className="d-grid px-0">
                <button className='bg-black p-3 px-5 w-max rounded-3xl shadow-2xl text-[#37c7da] font-bold'>Create & List NFT!</button>
              </div>
              </div>
           
      </div>
  );
}

export default Mint