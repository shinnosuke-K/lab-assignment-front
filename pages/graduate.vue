<template>
    <b-container>
        <div class="section">
            <Section :section="section"/>
        </div>
    </b-container>
</template>

<script>
import Section from '@/components/Section'

export default {
    components: {
        Section,
    },
    data() {
        // vuexを利用する
        return {
            section: {
                num: 2,
                show: false,
            }
        }
    }
}
</script>

<style scoped>
.section {
    border: solid 1px black;
    margin: 0% 100px;
}

</style>