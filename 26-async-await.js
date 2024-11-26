async function getData(){

    let greet = "Hello Good Evening";

    return greet;

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