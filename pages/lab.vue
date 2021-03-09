<template>
    <b-container>
        <div class="section">
            <Section :section="section" />
            <Precautions :people="people" />
        </div>
    </b-container>
</template>

<script>
import Section from '@/components/Section'
import Precautions from '@/components/Precautions'

export default {
    components: {
        Section,
        Precautions,
    },
    data() {
        return {
            section: {
                num: 1,
                show: true,
                suuplement: "研究室配属に関する希望を調査をします。"
            },
            people : {
                num: 11,
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