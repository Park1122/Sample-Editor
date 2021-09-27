<template>
    <div>
        <h2>Viewer</h2>
        <div class="viewerPart">
            <Viewer ref="viewer" :initialValue="this.data"/>
        </div>
    </div>
</template>

<script>
import { Viewer } from '@toast-ui/vue-editor';
import '@toast-ui/editor/dist/toastui-editor-viewer.css';
export default {
    components: {
        Viewer
    },
    data() {
        return {
            data: ''
        };
    },
    created() {
        console.log('view created running');
        this.data = this.$store.state.detail;
    }
}
</script>

<style scoped>
.viewerPart {
    margin-top: 20px;
    text-align: left;
}
</style>