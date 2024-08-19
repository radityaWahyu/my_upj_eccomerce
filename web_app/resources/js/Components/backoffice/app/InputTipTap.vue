<script setup lang="ts">
import Document from "@tiptap/extension-document";
import Paragraph from "@tiptap/extension-paragraph";
import Text from "@tiptap/extension-text";
import Heading from "@tiptap/extension-heading";
import Bold from "@tiptap/extension-bold";
import Italic from "@tiptap/extension-italic";
import ListItem from "@tiptap/extension-list-item";
import BulletList from "@tiptap/extension-bullet-list";
import OrderedList from "@tiptap/extension-ordered-list";
import Placeholder from "@tiptap/extension-placeholder";
import { useEditor, EditorContent } from "@tiptap/vue-3";
import { Button } from "@/shadcn/ui/button";
import {
    BoldIcon,
    ItalicIcon,
    Heading1Icon,
    Heading2Icon,
    ListIcon,
    ListOrderedIcon,
} from "lucide-vue-next";

const content = defineModel<any>();

const props = withDefaults(
    defineProps<{
        placeholder?: string;
    }>(),
    {
        placeholder: "Tuliskan sesuatu..",
    }
);

const editor = useEditor({
    content: content.value,
    extensions: [
        Document,
        Paragraph,
        Text,
        Heading.configure({ levels: [1, 2] }),
        Bold,
        Italic,
        BulletList,
        ListItem,
        OrderedList,
        Placeholder.configure({
            // Use a placeholder:
            placeholder: props.placeholder,
        }),
    ],
    editorProps: {
        attributes: {
            class: "rounded-b-lg  border border-gray-200 py-2 px-4 min-h-[12rem] max-h-[12rem] overflow-y-auto outline-none prose max-w-none bg-white text-sm [&_ol]:list-decimal [&_ul]:list-disc",
        },
    },
    onUpdate: () => {
        content.value = editor.value?.getHTML();
    },
});
</script>
<template>
    <div>
        <section
            v-if="editor"
            class="rounded-t-lg p-1 buttons text-gray-800 flex items-center flex-wrap border-t border-l border-r border-gray-200 bg-gray-100 space-x-2"
        >
            <Button
                type="button"
                variant="secondary"
                size="icon"
                @click="editor.chain().focus().toggleBold().run()"
                :class="{ 'bg-gray-200 rounded': editor.isActive('bold') }"
                class="p-1"
            >
                <BoldIcon class="h-4 w-4" />
            </Button>
            <Button
                type="button"
                variant="secondary"
                size="icon"
                @click="editor.chain().focus().toggleItalic().run()"
                :class="{ 'bg-gray-200 rounded': editor.isActive('italic') }"
                class="p-1"
            >
                <ItalicIcon class="h-4 w-4" />
            </Button>
            <Button
                type="button"
                variant="secondary"
                size="icon"
                @click="
                    editor.chain().focus().toggleHeading({ level: 1 }).run()
                "
                :class="{
                    'bg-gray-200 rounded': editor.isActive('heading', {
                        level: 1,
                    }),
                }"
            >
                <Heading1Icon class="w-5 h-5" />
            </Button>
            <Button
                type="button"
                variant="secondary"
                size="icon"
                @click="
                    editor.chain().focus().toggleHeading({ level: 2 }).run()
                "
                :class="{
                    'bg-gray-200 rounded': editor.isActive('heading', {
                        level: 2,
                    }),
                }"
                class="p-1"
            >
                <Heading2Icon class="w-5 h-5" />
            </Button>
            <Button
                type="button"
                variant="secondary"
                size="icon"
                @click="editor.chain().focus().toggleBulletList().run()"
                :class="{
                    'bg-gray-200 rounded': editor.isActive('bulletList'),
                }"
                class="p-1"
            >
                <ListIcon class="w-5 h-5" />
            </Button>
            <Button
                type="button"
                variant="secondary"
                size="icon"
                @click="editor.chain().focus().toggleOrderedList().run()"
                :class="{
                    'bg-gray-200 rounded': editor.isActive('orderedList'),
                }"
                class="p-1"
            >
                <ListOrderedIcon class="w-5 h-5" />
            </Button>
        </section>
        <EditorContent :editor="editor" />
    </div>
</template>
<style lang="scss">
/* Basic editor styles */
.tiptap {
    :first-child {
        margin-top: 0;
    }

    /* List styles */
    ul,
    ol {
        padding: 0 1rem;
    }

    /* Heading styles */
    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
        line-height: 1.1;
        text-wrap: pretty;
    }

    h1 {
        font-size: 1.4rem;
    }

    h2 {
        font-size: 1.2rem;
    }

    h3 {
        font-size: 1.1rem;
    }

    h4,
    h5,
    h6 {
        font-size: 1rem;
    }

    /* Code and preformatted text styles */
    code {
        background-color: var(--purple-light);
        border-radius: 0.4rem;
        color: var(--black);
        font-size: 0.85rem;
        padding: 0.25em 0.3em;
    }

    pre {
        background: var(--black);
        border-radius: 0.5rem;
        color: var(--white);
        font-family: "JetBrainsMono", monospace;

        code {
            background: none;
            color: inherit;
            font-size: 0.8rem;
            padding: 0;
        }
    }

    blockquote {
        border-left: 3px solid var(--gray-3);
        margin: 1.5rem 0;
        padding-left: 1rem;
    }

    hr {
        border: none;
        border-top: 1px solid var(--gray-2);
        margin: 2rem 0;
    }

    /* Placeholder (at the top) */
    p.is-editor-empty:first-child::before {
        @apply text-gray-500;
        content: attr(data-placeholder);
        float: left;
        height: 0;
        pointer-events: none;
    }

    /* Placeholder (on every new line) */
    /* .is-empty::before {
    color: var(--gray-4);
    content: attr(data-placeholder);
    float: left;
    height: 0;
    pointer-events: none;
  } */
}
</style>
