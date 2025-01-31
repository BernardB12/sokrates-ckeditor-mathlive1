import 'mathlive/dist/mathlive-static.css';
import 'mathlive';
import { ChangeDetectorRef, type AfterViewInit } from '@angular/core';
import { type EditorConfig, ClassicEditor } from 'ckeditor5';
export declare class AppComponent implements AfterViewInit {
    private changeDetector;
    private editorMenuBar;
    private editorWordCount;
    constructor(changeDetector: ChangeDetectorRef);
    isLayoutReady: boolean;
    Editor: typeof ClassicEditor;
    config: EditorConfig;
    ngAfterViewInit(): void;
    onReady(editor: ClassicEditor): void;
}
