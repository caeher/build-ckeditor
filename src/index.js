import ClassicEditor from '@ckeditor/ckeditor5-editor-classic/src/classiceditor'

import Alignment from '@ckeditor/ckeditor5-alignment/src/alignment'
import Autoformat from '@ckeditor/ckeditor5-autoformat/src/autoformat'
import { UploadAdapter } from '@ckeditor/ckeditor5-adapter-ckfinder'
import { CKFinder } from '@ckeditor/ckeditor5-ckfinder'

import { Bold, Italic, Underline, Superscript, Code, Subscript } from '@ckeditor/ckeditor5-basic-styles'
import BlockQuote from '@ckeditor/ckeditor5-block-quote/src/blockquote'
import { Clipboard } from '@ckeditor/ckeditor5-clipboard'
import { Image, ImageUpload, AutoImage, ImageCaption, ImageStyle, ImageResize, ImageToolbar, ImageInsert } from '@ckeditor/ckeditor5-image'
import { LinkImage, Link, AutoLink } from '@ckeditor/ckeditor5-link'
// import { EasyImage } from '@ckeditor/ckeditor5-easy-image'
import { Heading, Title } from '@ckeditor/ckeditor5-heading'
import CodeBlock from '@ckeditor/ckeditor5-code-block/src/codeblock'

import { FileRepository, SimpleUploadAdapter, Base64UploadAdapter, FileDialogButtonView } from '@ckeditor/ckeditor5-upload'


import Essentials from '@ckeditor/ckeditor5-essentials/src/essentials'
import Paragraph from '@ckeditor/ckeditor5-paragraph/src/paragraph'
import Highlight from '@ckeditor/ckeditor5-highlight/src/highlight'
import { TodoList, List } from '@ckeditor/ckeditor5-list'

import { Table, TableToolbar, TableCaption, TableProperties, TableCellProperties } from '@ckeditor/ckeditor5-table'

import { RemoveFormat } from '@ckeditor/ckeditor5-remove-format'

import { GeneralHtmlSupport, HtmlComment, DataFilter, DataSchema } from '@ckeditor/ckeditor5-html-support'
import { HtmlEmbed } from '@ckeditor/ckeditor5-html-embed'
import { SourceEditing } from '@ckeditor/ckeditor5-source-editing'
import { Markdown } from '@ckeditor/ckeditor5-markdown-gfm'
import { WordCount } from '@ckeditor/ckeditor5-word-count'
import { Minimap } from '@ckeditor/ckeditor5-minimap'
import { Font } from '@ckeditor/ckeditor5-font'
import { HorizontalLine } from '@ckeditor/ckeditor5-horizontal-line'
import { Indent, IndentBlock } from '@ckeditor/ckeditor5-indent'
import { TextPartLanguage } from '@ckeditor/ckeditor5-language'
import { Style } from '@ckeditor/ckeditor5-style'
import { SpecialCharacters, SpecialCharactersEssentials } from '@ckeditor/ckeditor5-special-characters'
import { SelectAll } from '@ckeditor/ckeditor5-select-all'
import { Typing, TextTransformation, Input, Delete, TextWatcher } from '@ckeditor/ckeditor5-typing'
import { FindAndReplace } from '@ckeditor/ckeditor5-find-and-replace'
import { Mention } from '@ckeditor/ckeditor5-mention'

class CaeherEditor extends ClassicEditor {

}

console.log(CaeherEditor, ClassicEditor)

ClassicEditor.builtinPlugins = ClassicEditor.builtinPlugins || []
ClassicEditor.defaultConfig = ClassicEditor.defaultConfig || {}


const codeBlockConfig = {
    languages: [
        { language: 'php', label: 'PHP', class: 'php-code' }
    ]
}

const textAligmentConfig = {
    options: ['left', 'right', 'center', 'justify']
}

const highlightConfig = {
    options: [
        { model: 'yellowMarker', class: 'marker-yellow', title: 'Yellow Marker', color: 'var(--ck-highlight-marker-yellow)', type: 'marker' },
        { model: 'greenMarker', class: 'marker-green', title: 'Green marker', color: 'var(--ck-highlight-marker-green)', type: 'marker' },
        { model: 'pinkMarker', class: 'marker-pink', title: 'Pink marker', color: 'var(--ck-highlight-marker-pink)', type: 'marker' },
        { model: 'blueMarker', class: 'marker-blue', title: 'Blue marker', color: 'var(--ck-highlight-marker-blue)', type: 'marker' },
        { model: 'redPen', class: 'pen-red', title: 'Red pen', color: 'var(--ck-highlight-pen-red)', type: 'pen' },
        { model: 'greenPen', class: 'pen-green', title: 'Green pen', color: 'var(--ck-highlight-pen-green)', type: 'pen' }
    ]
}

const customColorPallete = [
    {
        color: 'hsl(4, 90%, 58%)',
        label: 'Red'
    },
    {
        color: 'hsl(340, 82%, 52%)',
        label: 'Pink'
    },
    {
        color: 'hsl(291, 64%, 42%)',
        label: 'Purple'
    },
    {
        color: 'hsl(262, 52%, 47%)',
        label: 'Deep Purple'
    },
    {
        color: 'hsl(231, 48%, 48%)',
        label: 'Indigo'
    },
    {
        color: 'hsl(207, 90%, 54%)',
        label: 'Blue'
    },
]
const tableConfig = {
    contentToolbar: [
        'tableColumn', 'tableRow', 'mergeTableCells',
        'tableProperties', 'tableCellProperties'
    ],
    tableProperties: {
        boderColors: customColorPallete,
        backgroundColors: customColorPallete
    },
    tableCellProperties: {
        boderColors: customColorPallete,
        backgroundColors: customColorPallete
    }
}


const htmlSupportConfig = {
    allow: [
        // Enables plain <div> elements.
        {
            name: 'div'
        },
        // Enables plain <div>, <section> and <article> elements.
        {
            name: /^(div|section|article)$/
        },
        // Enables <div>s with all inline styles (but no other attributes).
        {
            name: 'div',
            styles: true
        },
        // Enables <div>s with foo and bar classes.
        {
            name: 'div',
            classes: ['foo', 'bar']
        },
        // Adds support for `foo` and `bar` classes to the already supported
        // <p> elements (those are enabled by the dedicated paragraph feature).
        {
            name: 'p',
            classes: ['foo', 'bar']
        },
        // Enables <div>s with foo="true" attribute and bar attribute that
        // can accept any value (boolean `true` value works as an asterisk).
        {
            name: 'div',
            attributes: {
                foo: 'true',
                bar: true
            }
        },

        // Adds support for style="color: *" to the already supported
        // <p> and <h2-h4> elements.
        {
            name: /^(p|h[2-4])$/,
            styles: { 
                color: true 
            }
        }
    ]
}

function RemoveFormatLinks(editor) {
    editor.model.schema.setAttributeProperties('linkHref', { isFormatting: true })
}

function RemoveFormatStyle (editor) {
    editor.model.schema.setAttributeProperties('div', { isFormatting: true })
}

function SpecialCharactersEmoji (editor) {
    editor.plugins.get('SpecialCharacters').addItems('Emoji', [
        { title: 'smile face', character: '😁'},
        { title: 'rocket', character: '🚀'},
        { title: 'wind blowing face', character: '🌬️'},
        { title: 'floppy disk', character: '💾'},
        { title: 'heart', character: '💖'},
        { title: 'glassess face', character: '😎'}
    ])
}

ClassicEditor.builtinPlugins.push(
    Essentials,
    // Upload
    Base64UploadAdapter,
    FileDialogButtonView,
    UploadAdapter,
    SimpleUploadAdapter,

    // Html support
    GeneralHtmlSupport,
    HtmlComment,
    DataFilter,
    DataSchema,
    HtmlEmbed,
    SourceEditing,
    Markdown,
    WordCount,

    Minimap,
    Font, 
    HorizontalLine,
    Indent,
    IndentBlock,
    TextPartLanguage,
    Style,

    // Special Character
    SpecialCharacters,
    SpecialCharactersEssentials,
    SpecialCharactersEmoji,

    SelectAll,
    Typing,
    TextTransformation, 
    // Input, 
    // Delete, 
    // TextWatcher,

    CKFinder,
    RemoveFormat,
    List,
    TodoList,
    RemoveFormatLinks,
    RemoveFormatStyle,
    FileRepository,
    Alignment,
    Autoformat,
    CodeBlock,
    Paragraph,
    FindAndReplace,
    // Table
    Table,
    TableToolbar,
    TableProperties,
    TableCellProperties,
    TableCaption,

    // Basic style
    Bold,
    Italic,
    Underline,
    Code,
    Superscript,
    Subscript,
    // Blockquote
    BlockQuote,

    Clipboard,
    Heading,
    Title,
    Link,

    // Image
    // EasyImage,
    Image,
    AutoImage,
    ImageToolbar,
    ImageCaption,
    ImageStyle,
    ImageResize,
    LinkImage,
    ImageInsert,
    ImageUpload,
    Highlight,

    Mention
)

ClassicEditor.defaultConfig = {
    ...ClassicEditor.defaultConfig,
    ...{
        placeholder: 'Type the content here!',
        toolbar: {
            items: [
                'heading', 'removeFormat', 'findAndReplace', 'selectAll', 'todoList', 'htmlEmbed', 'textPartLanguage' , '|', 'outdent', 'indent', '|',
                'insertTable', 'bulletedList', 'numberedList', 'horizontalLine',
                'codeBlock', 'alignment', 'blockQuote', '|',
                'specialCharacters', 
                'fontSize', 'fontFamily', 'fontColor', 'fontBackgroundColor',
                'bold', 'italic', 'subscript', 'superscript', 'underline', 'code', '|',
                'uploadImage', 'ckfinder', 'link', 'highlight', 'sourceEditing' , '|', 'undo', 'redo'
            ]
        },
        image: {
            toolbar: [
                'imageStyle:inline', 'imageStyle:block', 'imageStyle:side', '|', 'toggleImageCaption', 'imageTextAlternative', '|', 'linkImage'
            ]
        },
        codeBlock: codeBlockConfig,
        alignment: textAligmentConfig,
        ckfinder: {
            // Open the file manager in the pop-up window.
            openerMethod: 'popup'
        },
        highlight: highlightConfig,
        table: tableConfig,
        htmlEmbed: {
            showPreviews: true
        },
        htmlSupport: htmlSupportConfig,
        removePlugins: ['Markdown'],
        minimap: {
            container: document.querySelector('.minimap-container'),
            useSimplePreview: true
        },
        language: {
            textPartLanguage: [
                { title: 'Arabic', languageCode: 'ar' },
                { title: 'French', languageCode: 'fr' },
                { title: 'Hebrew', languageCode: 'he' },
                { title: 'Spanish', languageCode: 'es' }
            ]
        },
        mention: {
            feeds: [
                {
                    marker: '@',
                    feed: [ '@Barney', '@Lily', '@Marry Ann', '@Marshall', '@Robin', '@Ted' ],
                    minimumCharacters: 1
                }
            ]
        }
    }
}



let editor = ClassicEditor.create(
    document.getElementById('editor-content'),
    {}
).then(editor => {
    // const toolbarContainerWrapper = document.querySelector('#toolbar-container')
    // toolbarContainerWrapper.appendChild(editor.ui.view.toolbar.element)
    const wordCountPlugin = editor.plugins.get('WordCount')
    const wordCountWrapper = document.getElementById('word-count')

    // const minimapPlugin = editor.plugins.get('Minimap')
    // const minimapWrapper = document.getElementById('minimap')

    wordCountWrapper.appendChild(wordCountPlugin.wordCountContainer)
    // minimapWrapper.appendChild(minimapPlugin.)
})
    .catch(err => console.log(err))


export default ClassicEditor
