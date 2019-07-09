<template>
    <div>
        {{tok}}
    </div>
</template>
<script>
import GLOBAL from '../global'
export default {
    data() {
        return {
            tok:GLOBAL.token
        }
    },
}
</script>