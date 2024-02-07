<script>
import { store } from "../store.js" //state management

export default {
    name: "AppEventList",
    data() {
        return {
            store
        }
    }
}
</script>

<template>
    <div>
        <h1>Eventi</h1>

        <div class="container">
            <div class="row">

                <div class="col-md-4 gy-4" v-for="evento in store.eventList">
                    <div class="card h-100">
                        <div class="card-header">{{ evento.date }}</div>
                        <div class="card-body">
                            <h5 class="card-title">{{ evento.name }}</h5>
                            <h6 class="card-subtitle mb-2 text-muted">{{ evento.user.name }}</h6>
                            <p class="card-text">Restano <b>{{ evento.available_tickets }}</b> biglietti disponibili.
                            </p>
                        </div>
                        <div class="card-footer text-center">
                            <a href="#" class="btn btn-primary">
                                <font-awesome-icon icon="fa-solid fa-circle-info" class="me-2" />
                                <span>Go somewhere</span>
                            </a>
                        </div>
                    </div>
                </div>

            </div>
        </div>

    </div>
</template>