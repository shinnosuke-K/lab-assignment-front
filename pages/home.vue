<template>
    <div class="container">
        <Section :section="section[0]" />
        <Section :section="section[1]"/>
    </div>
</template>

<script>
import Section from '@/components/Section'

export default {
    name: 'Home',
    components: {
        Section,
    },
    data() {
        return {
            section: [
                {num: 1, show: false, fixShow: true, route: '/lab'},
                {num: 2, show: false, fixShow: true, route: 'graduate'},
            ]
        }
    }
}
</script>

<style>

</style>