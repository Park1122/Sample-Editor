<template>
    <div>
        <h2>Write</h2>
        <div class="editorPart">
            <Editor ref="editor" initialEditType="wysiwyg" height="750px" :initialValue="this.$store.state.detail"/>
        </div>
        <button @click="saveContents">Save</button>
    </div>
</template>

<script>
import '@toast-ui/editor/dist/toastui-editor.css';
import { Editor} from '@toast-ui/vue-editor';

export default {
    components: {
        Editor
    },
    methods: {
        saveContents() {
            console.log('saveContents running');
            this.$store.commit('saveContent', this.$refs.editor.invoke("getMarkdown"));
        }
    }
}
</script>

<style scoped>
button {
    margin-top: 30px;
    margin-left: 10px;
}
.editorPart {
    text-align: left;
}
</style>