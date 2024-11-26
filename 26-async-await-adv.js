async function getData(){

    return new Promise((resolve, reject)=>{

        // resolve("Hey.. Successfully returning data...");

        // reject("Failed to fetch data...");

        setTimeout(() => {

            resolve("Hey.. Finally fetched the data successfully...");

        }, 7000);

    });

}

async function main(){

    console.log("======= start main() =======");

    try {

        const result = await getData();

        console.log(result); 

    } catch (error) {

        console.log(error);

    }

    console.log("======= end main() =======");

}

main();