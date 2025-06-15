const { Kafka } = require("kafkajs")


run();

async function run() {
    try {
        const kafka = new Kafka({
            "clientId": "myapp",
            "brokers": ["192.18.7.179:9092"]
        })

        const admin = kafka.admin();
        console.log("connecting...")
        await admin.connect()
        console.log("Connected!")

        await admin.createTopics({
            "topics": [{
                "topic": "myUsers",
                "numPartitions": 2
            }]
        })
        console.log("Created succesfully")
        await admin.disconnect();
    }catch(error){
        console.error(`Something wrong happened ${error}`)
    }
    finally{
        process.exit(o)
    }
}