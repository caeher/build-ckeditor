
import ClassicEditor from '@ckeditor/ckeditor5-editor-classic/src/classiceditor'

import { Alignment } from '@ckeditor/ckeditor5-alignment'
import { Autoformat } from '@ckeditor/ckeditor5-autoformat'
import { UploadAdapter } from '@ckeditor/ckeditor5-adapter-ckfinder'
import { CKFinder } from '@ckeditor/ckeditor5-ckfinder'
import { Bold, Italic, Underline, Superscript, Code, Subscript } from '@ckeditor/ckeditor5-basic-styles'
import { BlockQuote } from '@ckeditor/ckeditor5-block-quote'
import { Clipboard, DragDrop, PastePlainText, ClipboardPipeline } from '@ckeditor/ckeditor5-clipboard'
import { Image, ImageUpload, AutoImage, ImageCaption, ImageStyle, ImageResize, ImageToolbar, ImageInsert } from '@ckeditor/ckeditor5-image'
import { LinkImage, Link, AutoLink } from '@ckeditor/ckeditor5-link'
import { Heading, Title } from '@ckeditor/ckeditor5-heading'
import { CodeBlock } from '@ckeditor/ckeditor5-code-block'
import { FileRepository, SimpleUploadAdapter, Base64UploadAdapter, FileDialogButtonView } from '@ckeditor/ckeditor5-upload'
import { Essentials } from '@ckeditor/ckeditor5-essentials'
import { Paragraph } from '@ckeditor/ckeditor5-paragraph'
import { Highlight } from '@ckeditor/ckeditor5-highlight'
import { TodoList, List, ListProperties} from '@ckeditor/ckeditor5-list'
import { Table, TableToolbar, TableCaption, TableProperties, TableCellProperties, TableClipboard } from '@ckeditor/ckeditor5-table'
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
// @ts-ignore
import { Style } from '@ckeditor/ckeditor5-style'
import { SpecialCharacters, SpecialCharactersEssentials, SpecialCharactersArrows, SpecialCharactersCurrency, SpecialCharactersLatin, SpecialCharactersMathematical, SpecialCharactersText } from '@ckeditor/ckeditor5-special-characters'
import { SelectAll } from '@ckeditor/ckeditor5-select-all'
import { Typing, TextTransformation, Input, Delete, TextWatcher } from '@ckeditor/ckeditor5-typing'
import { FindAndReplace } from '@ckeditor/ckeditor5-find-and-replace'
import { Mention } from '@ckeditor/ckeditor5-mention'

// types
import { CodeBlockConfig } from '@ckeditor/ckeditor5-code-block/src/codeblock'
import { AlignmentConfig } from '@ckeditor/ckeditor5-alignment/src/alignment'
import { CKFinderConfig } from '@ckeditor/ckeditor5-ckfinder/src/ckfinder'
import { ImageConfig } from '@ckeditor/ckeditor5-image/src/image'
import { HighlightConfig } from '@ckeditor/ckeditor5-highlight/src/highlight'
import { LanguageConfig } from '@ckeditor/ckeditor5-core/src/editor/editorconfig'
import { MentionConfig, MentionFeedItem, MentionFeed } from '@ckeditor/ckeditor5-mention/src/mention'

class CaeherEditor extends ClassicEditor {
    constructor () {
        super(...arguments)
    }
}

const codeBlockConfig: CodeBlockConfig = {
    languages: [
        { language: 'php', label: 'PHP', class: 'php-code' }
    ],
    indentSequence: ''
}

const textAligmentConfig: AlignmentConfig = {
    options: ['left', 'right', 'center', 'justify']
}

const highlightConfig: HighlightConfig = {
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

function RemoveFormatLinks(editor: any) {
    editor.model.schema.setAttributeProperties('linkHref', { isFormatting: true })
}

function RemoveFormatStyle(editor: any) {
    editor.model.schema.setAttributeProperties('div', { isFormatting: true })
}

function SpecialCharactersEmoji(editor: any) {
    editor.plugins.get('SpecialCharacters').addItems('Emoji', [
        { title: 'smile face', character: '😁' },
        { title: 'rocket', character: '🚀' },
        { title: 'wind blowing face', character: '🌬️' },
        { title: 'floppy disk', character: '💾' },
        { title: 'heart', character: '💖' },
        { title: 'glassess face', character: '😎' }
    ])
}
CaeherEditor.builtinPlugins = CaeherEditor.builtinPlugins || []
CaeherEditor.builtinPlugins = [
    Essentials,
    Style,
    // Upload
    CKFinder,
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

    // Special Character
    SpecialCharacters,
    SpecialCharactersEssentials,
    SpecialCharactersArrows, 
    SpecialCharactersCurrency, 
    SpecialCharactersLatin, 
    SpecialCharactersMathematical, 
    SpecialCharactersText,
    SpecialCharactersEmoji,

    SelectAll,
    Typing,
    TextTransformation,
    Input, 
    Delete, 
    // TextWatcher,

    RemoveFormat,
    List,
    TodoList,
    ListProperties,
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
    TableClipboard,

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

    Mention,
    DragDrop, 
    PastePlainText, 
    ClipboardPipeline,
    
]
CaeherEditor.defaultConfig = CaeherEditor.defaultConfig || {}
CaeherEditor.defaultConfig = {
    placeholder: 'Type the content here!',
    toolbar: {
        items: [
            'selectAll', 'removeFormat', '|', 'undo', 'redo', '|', 'heading', 'textPartLanguage', 'subscript', 'superscript', 'bold', 'italic', 'underline', 'fontSize', 'fontFamily',
            '|', 'codeBlock', 'alignment', 'blockQuote', '|', 'bulletedList', 'numberedList', 'todoList',  '|',
            'findAndReplace', '|', 'outdent', 'indent', '|',
            'insertTable', 'horizontalLine',
            'specialCharacters', 'imageInsert', 'ckFinder',
            'fontColor', 'fontBackgroundColor',
            'code', '|',
            'link', 'highlight', 'sourceEditing',
            // 'htmlEmbed',
        ]
    },
    image: {
        toolbar: [
            'imageStyle:inline', 'imageStyle:block', 'imageStyle:side', '|', 'toggleImageCaption', 'imageTextAlternative', '|', 'linkImage'
        ],
        // insert:
    },
    codeBlock: codeBlockConfig,
    alignment: textAligmentConfig,
    ckfinder: <CKFinderConfig>{
        // Open the file manager in the pop-up window.
        openerMethod: 'popup'
    },
    highlight: highlightConfig,
    table: tableConfig,
    // htmlEmbed: {
    //     showPreviews: true
    // },
    // htmlSupport: htmlSupportConfig,
    removePlugins: ['Markdown', 'Minimap', 'uploadImage', 'ckFinder'],
    language: <LanguageConfig> {
        textPartLanguage: [
            { title: 'Arabic', languageCode: 'ar' },
            { title: 'French', languageCode: 'fr' },
            { title: 'Hebrew', languageCode: 'he' },
            { title: 'Spanish', languageCode: 'es' }
        ]
    },
    mention: {
        feeds: <MentionFeed[]>[
            {
                marker: '@',
                feed:<MentionFeedItem[] | string[]>['@Barney', '@Lily', '@Marry Ann', '@Marshall', '@Robin', '@Ted'],
                minimumCharacters: 1
            }
        ]
    }
}

let editor = CaeherEditor.create(
    //@ts-ignore
        document.getElementById('editor-content'),
        {}
    ).then(editor => {
        const wordCountPlugin = editor.plugins.get('WordCount')
        const wordCountWrapper = document.getElementById('word-count')
    
        if(wordCountWrapper != null) {
            wordCountWrapper.appendChild(wordCountPlugin.wordCountContainer)
        }
    })
        .catch(err => console.log(err))
export default CaeherEditor


