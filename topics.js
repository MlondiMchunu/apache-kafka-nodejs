const { Kafka } = require("kafkajs")

async function run() {

    const kafka = new Kafka({
        "clientId": "myapp",
        "brokers": ["192.168.7.179:9092"]
    })

    const admin = kafka.admin();
    try {

        console.log("connecting...")
        await admin.connect()
        console.log("Connected!")

        await admin.createTopics({
            "topics": [{
                "topic": "myUsers",
                "numPartitions": 2
            }],
        })
        console.log("Created succesfully")
        
    } catch (error) {
        console.error(`Something wrong happened ${error}`)
    }
    finally {
        await admin.disconnect();
        process.exit(0)
    }
}

run();