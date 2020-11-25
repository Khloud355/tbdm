<template>
    <div class="nav-header">
        <ul class="nav justify-content-center">
            <li class="nav-item">
                <nuxt-link class="nav-link active" to="/">Services</nuxt-link>
            </li>
            <li class="nav-item">
                <nuxt-link class="nav-link" to="/">Index</nuxt-link>
            </li>
            <li class="nav-item">
                <nuxt-link class="nav-link" to="/">VIP</nuxt-link>
            </li>
            <li class="nav-item">
                <nuxt-link class="nav-link" to="/">Buy & Sell</nuxt-link>
            </li>
            <li class="nav-item">
                <nuxt-link class="nav-link" to="/">Chat</nuxt-link>
            </li>
            <li class="nav-item">
                <nuxt-link class="nav-link" to="/">News</nuxt-link>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    data() {
        return {
            selected: 1
        }
    }
}
</script>