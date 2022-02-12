import {ownerOf} from "./UseCaver.js"

const main = async () => {
    const owner = await ownerOf(0)
    console.log(owner)
}

export const handler = async (event) => {
    let owner = await main()    
    
    const response = {
        statusCode: 200,
        body: JSON.stringify(owner),
    };
    return response;
};

