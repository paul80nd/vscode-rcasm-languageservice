# vscode-rcasm-languageservice

Relay Computer Assembly language service designed for use in either VSCode or the Monaco editor
(based on [microsoft/vscode-html-languageservice](https://github.com/microsoft/vscode-html-languageservice)).

[![Build Status](https://github.com/paul80nd/vscode-rcasm-languageservice/workflows/Node%20CI/badge.svg)](https://github.com/paul80nd/vscode-rcasm-languageservice/actions)

Why?
----

The _vscode-rcasm-languageservice_ contains the language smarts behind the Relay Computer Assembly editing experience of Visual Studio Code
and the Monaco editor.

- *findDocumentHighlights* provides the highlighted symbols for a given position.
- *doComplete* provides completion proposals for a given location.
- *setCompletionParticipants* allows participant to provide suggestions for specific tokens.
- *doHover* provides hover information at a given location.
- *format* formats the code at the given range.
- *findDocumentLinks* finds all links in the document.
- *findDocumentSymbols* finds all the symbols in the document.
- *getFoldingRanges* return folding ranges for the given document.
- *getSelectionRanges* return the selection ranges for the given document.

Installation
------------

    npm install --save @paul80nd/vscode-rcasm-languageservice

License
-------

(MIT License)

Based on vscode-html-languageservice:
Copyright 2016-2019, Microsoft

With the exceptions of `data/*.json`, which is built upon content from [Mozilla Developer Network](https://developer.mozilla.org/en-US/docs/Web)
and distributed under CC BY-SA 2.5.
