<script>
export default {
    name: "EventCard",
    props: ["item"]
}
</script>

<template>
    <div class="col-md-4 gy-4">
        <div class="card h-100">
            <div class="card-header">{{ item.date }}</div>
            <div class="card-body">
                <h5 class="card-title">{{ item.name }}</h5>
                <h6 class="card-subtitle mb-2 text-muted">
                    {{ item.user ? item.user.name : "Utente sconosciuto" }}
                </h6>
                <p class="card-text">Restano <b>{{ item.available_tickets }}</b> biglietti disponibili.
                </p>
            </div>
            <div class="card-footer text-center">
                <router-link :to="{ name: 'event-detail', params: { id: item.id } }" class="btn btn-primary">
                    <font-awesome-icon icon="fa-solid fa-circle-info" class="me-2" />
                    <span>Dettagli</span>
                </router-link>
            </div>
        </div>
    </div>
</template>