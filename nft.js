let nftCollection = [];

function mintNFT(name, eyeColor, shirtType, bling) {
    let nft = {
        name: name,
        eyeColor: eyeColor,
        shirtType: shirtType,
        bling: bling
    };
    nftCollection.push(nft);
}

function listNFTs() {
    nftCollection.forEach((nft, index) => {
        console.log(`NFT #${index + 1}:`);
        console.log(`Name: ${nft.name}`);
        console.log(`Eye Color: ${nft.eyeColor}`);
        console.log(`Shirt Type: ${nft.shirtType}`);
        console.log(`Bling: ${nft.bling}`);
        console.log('-------------------------');
    });
}

function getTotalSupply() {
    return nftCollection.length;
}

mintNFT("Cool Cat", "Blue", "T-Shirt", "Gold Chain");
mintNFT("Chill Dog", "Brown", "Hoodie", "Silver Ring");
mintNFT("Funky Monkey", "Green", "Tank Top", "Diamond Earring");
mintNFT("Stylish Elephant", "Grey", "Sweater", "Platinum Watch");

listNFTs();

console.log(`Total NFTs Minted: ${getTotalSupply()}`);
