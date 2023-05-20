<template>
    <!-- <iframe 
        v-for="(data, index) in URL"
        class = schedule
        v-bind:src = URL[index]
    ></iframe> -->
</template>

<script>
import Event from '../assets/event.json'
import { ref, onMounted } from 'vue'

const eventData = Event.event
const URL = ref([])

const createURL = (title, description, date_start, date_end) => {
    return "http://127.0.0.1:8000/api?title=" + title + "&description=" + description + "&dates=" + date_start + "/" + date_end
}

onMounted(() => {
    for(var i=0; i<Object.keys(Event.event).length; i++){
        const title       = eventData[i]["title"]
        const description = eventData[i]["description"]
        const date_start  = eventData[i]["date_start"]
        const date_end    = eventData[i]["date_end"]

        URL.value.push( createURL(title, description, date_start, date_end) )
    }
})

</script>

<style scoped>
.schedule{
    border: 0;
    position: relative;
    width: 60%;
    left: 50%;
    transform: translateX(-50%);
}

</style>