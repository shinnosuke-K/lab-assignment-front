<template>
    <input @keydown.enter="onClick" type="text" class="text input-form" placeholder="User ID">
    <!-- <b-form-input placeholder="User ID"></b-form-input> -->
</template>

<script>
export default {
    name: "userForm",
    methods: {
        onClick: (event)=> {
            alert("Click!")
        }
    },
}
</script>