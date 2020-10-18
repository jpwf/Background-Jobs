import queue from 'bull';
import redisconfig from '../config/redis';

import * as jobs from '../jobs'

const queues = Object.values(jobs).map(job => ({
    bull: new queue(job.key, redisconfig),
    name: job.kay,
    handle: job.handle,
    opetions: job.options
}))

export default {
    queues,
    add( name, data) {
        const queue = this.queues.find(queue => queue.name === name);

        return queue.bull.add(data, queue.options);
    },
    process(){
        return this.queues.forEach(queue => {
            queue.bull.process(queue.handle);

            queue.bull.on('failed', (job, err) => {
                console.log('Job failed', queue.key, job.data);
                console.log(err);
            })
        })
    }
}