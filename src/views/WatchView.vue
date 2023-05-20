<template>
    <h1 class="title">{{ title }}</h1>

    <img src="../assets/bule.png">
    <div class="sentence">　開催日時　：{{ date_start }} ～ {{ date_end }}</div>
    <div class="sentence">イベント説明：{{ description }}</div>

    <button type="submit" id="btn" @click="Registration()">参加登録</button>

    <iframe 
        class = schedule
        v-bind:src = URL
    ></iframe>

    <button type="submit" id="btn_TOP" @click="HOME()">TOP</button>
</template>

<script setup>
import Event from '../assets/event.json'
import { useRouter } from 'vue-router'
import { ref, onMounted } from 'vue'

const router = useRouter()

const eventData = Event.event
const title = ref()
const description = ref()
const date_start = ref()
const date_end = ref()
const URL = ref()

onMounted(() => {
    const num = Number( location.pathname.split("/").slice(-2)[1] )
    title.value = eventData[num]["title"]
    description.value = eventData[num]["description"]
    date_start.value = ChangeDate(eventData[num]["date_start"])
    date_end.value = ChangeDate(eventData[num]["date_end"])

    createURL(title.value, description.value, date_start.value, date_end.value)
})

const ChangeDate = (dateString) => {
    const year = parseInt(dateString.substr(0, 4));
    const month = parseInt(dateString.substr(4, 2)) - 1;
    const day = parseInt(dateString.substr(6, 2));
    const hours = parseInt(dateString.substr(9, 2));
    const minutes = parseInt(dateString.substr(11, 2));
    const seconds = parseInt(dateString.substr(13, 2));

    const date = new Date(year, month, day, hours, minutes, seconds);
    const formattedDate = `${date.getFullYear()}/${(date.getMonth() + 1).toString().padStart(2, '0')}/${date.getDate().toString().padStart(2, '0')} ${date.getHours().toString().padStart(2, '0')}:${date.getMinutes().toString().padStart(2, '0')}:${date.getSeconds().toString().padStart(2, '0')}`;
    return formattedDate
}

const createURL = (title, description, date_start, date_end) => {
    URL.value = "http://127.0.0.1:8000/api?title=" + title + "&description=" + description + "&dates=" + date_start + "/" + date_end
}

const HOME = () => {
    router.push('/')
}

const Registration = () => {
    alert("参加登録をしました")
}
</script>

<style scoped>
img {
    margin-top: 3%;
    margin-bottom: 3%;
    position: relative;
    left: 50%;
    width: 50%;
    transform : translateX(-50%);
}

.sentence{
    position: relative;
    margin-bottom: 1%;
    width: 70%;
    left: 50%;
    transform: translateX(-50%);
}

.schedule{
    position: relative;
    margin-top: 0%;
    width: 300pt;
    height: 150pt;
    left: 50%;
    transform: translateX(-50%);

    border: 0;
}
</style>