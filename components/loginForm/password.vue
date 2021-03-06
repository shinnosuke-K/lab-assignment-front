<template>
    <input @keydown.enter="onClick" type="text" class="text input-form" placeholder="Password">
    <!-- <b-form-input placeholder="Password"></b-form-input> -->
</template>

<script>
export default {
    name: "passwordFrom",
    methods: {
        onClick: (event)=> {
            alert("Click!")
        }
    },
}
</script>