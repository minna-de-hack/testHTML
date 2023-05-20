<template>
    <h1 class="title">イベント一覧</h1>

    <button v-for="index in Object.keys(Event.event).length" class="event" @click="router.push('/watch/' + Event.event[index - 1]['id'])">
        <img src="../assets/bule.png">
        <h2>{{ title[index - 1] }}</h2>
        <div>　開催日時　：{{ date_start[index - 1] }} ～ {{ date_end[index - 1] }}</div>
        <div>イベント説明：{{ description[index - 1] }}</div>
    </button>
</template>

<script setup>
import Event from '../assets/event.json'
import { useRouter } from 'vue-router'
import { ref, onMounted } from 'vue'

const router = useRouter()

const eventData = Event.event
const title = ref([])
const description = ref([])
const date_start = ref([])
const date_end = ref([])

onMounted(() => {
    for(var i=0; i<Object.keys(Event.event).length; i++){
        title.value.push( eventData[i]["title"] )
        description.value.push( eventData[i]["description"] )
        date_start.value.push( ChangeDate(eventData[i]["date_start"]) )
        date_end.value.push( ChangeDate(eventData[i]["date_end"]) )
    }
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

</script>

<style scoped>
.event{
    margin-top: 5%;
    margin-bottom: 0%;
    position: relative;
    left: 50%;
    width: 50%;
    transform : translateX(-50%);
    
    border: 0;
    background-color: #FFF;
    display: block;
}
.event img{
    width: 100%;
}
.event h2{
    margin-top: 0%;
    margin-bottom: 1%;
    font-size: 200%;
}
.event div{
    text-align: left;
    font-size: 150%;
}

button:hover {
  cursor: pointer; /* カーソルをポインターに変更 */
}
</style>