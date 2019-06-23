import { Injectable } from '@angular/core';

@Injectable()
export class FileApiProvider {
    base64toBlob(base64Data, contentType) {
        contentType = contentType || '';
        var sliceSize = 1024;
        var byteCharacters = atob(base64Data);
        var bytesLength = byteCharacters.length;
        var slicesCount = Math.ceil(bytesLength / sliceSize);
        var byteArrays = new Array(slicesCount);

        for (var sliceIndex = 0; sliceIndex < slicesCount; ++sliceIndex) {
            var begin = sliceIndex * sliceSize;
            var end = Math.min(begin + sliceSize, bytesLength);


            var bytes = new Array(end - begin);
            for (var offset = begin, i = 0; offset < end; ++i, ++offset) {
                bytes[i] = byteCharacters[offset].charCodeAt(0);
            }
            byteArrays[sliceIndex] = new Uint8Array(bytes);
        }
        return new Blob(byteArrays, {
            type: contentType
        });
    }

    getFileMIMEType(filename) {
        // var extension = (filename.split('.')[1]);
        var extension = filename.substring(filename.lastIndexOf('.') + 1, filename.length);
        var mimeType = '';
        switch (extension) {
            case 'ecma':
                {
                    mimeType = 'application/ecmascript';
                    break;
                }
            case 'emma':
                {
                    mimeType = 'application/emma+xml';
                    break;
                }
            case 'epub':
                {
                    mimeType = 'application/epub+zip';
                    break;
                }
            case 'woff':
                {
                    mimeType = 'application/font-woff';
                    break;
                }
            case 'jar':
                {
                    mimeType = 'application/java-archive';
                    break;
                }
            case 'js':
                {
                    mimeType = 'application/javascript';
                    break;
                }
            case 'json':
                {
                    mimeType = 'application/json';
                    break;
                }
            case 'jsonml':
                {
                    mimeType = 'application/jsonml+json';
                    break;
                }
            case 'mp4s':
                {
                    mimeType = 'application/mp4';
                    break;
                }
            case 'dot':
            case 'doc':
                {
                    mimeType = 'application/msword';
                    break;
                }
            case 'ogx':
                {
                    mimeType = 'application/ogg';
                    break;
                }
            case 'onetoc':
            case 'onetoc2':
            case 'onetmp':
            case 'onepkg':
                {
                    mimeType = 'application/onenote';
                    break;
                }
            case 'pdf':
                {
                    mimeType = 'application/pdf';
                    break;
                }
            case 'rss':
                {
                    mimeType = 'application/rss+xml';
                    break;
                }
            case 'rtf':
                {
                    mimeType = 'application/rtf';
                    break;
                }
            case 'apk':
                {
                    mimeType = 'application/vnd.android.package-archive';
                    break;
                }
            case 'm3u8':
                {
                    mimeType = 'application/vnd.apple.mpegurl';
                    break;
                }
            case 'xls':
            case 'xlm':
            case 'xla':
            case 'xlc':
            case 'xlt':
            case 'xlw':
                {
                    mimeType = 'application/vnd.ms-excel';
                    break;
                }
            case 'xlsx':
                {
                    mimeType = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet';
                    break;
                }
            case 'xltx':
                {
                    mimeType = 'application/vnd.openxmlformats-officedocument.spreadsheetml.template';
                    break;
                }
            case 'eot':
                {
                    mimeType = 'application/vnd.ms-fontobject';
                    break;
                }
            case 'chm':
                {
                    mimeType = 'application/vnd.ms-htmlhelp';
                    break;
                }
            case 'ppt':
            case 'pps':
            case 'pot':
                {
                    mimeType = 'application/vnd.ms-powerpoint';
                    break;
                }
            case 'mpp':
            case 'mpt':
                {
                    mimeType = 'application/vnd.ms-project';
                    break;
                }
            case 'wps':
            case 'wks':
            case 'wcm':
            case 'wdb':
                {
                    mimeType = 'application/vnd.ms-works';
                    break;
                }
            case 'docx':
                {
                    mimeType = 'application/vnd.openxmlformats-officedocument.wordprocessingml.document';
                    break;
                }
            case 'dotx':
                {
                    mimeType = 'application/vnd.openxmlformats-officedocument.wordprocessingml.template';
                    break;
                }
            case 'm4a':
            case 'mp4a':
                {
                    mimeType = 'audio/mp4';
                    break;
                }
            case 'mpga':
            case 'mp2':
            case 'mp2a':
            case 'mp3':
            case 'm2a':
            case 'm3a':
                {
                    mimeType = 'audio/mpeg';
                    break;
                }
            case 'oga':
            case 'ogg':
            case 'spx':
                {
                    mimeType = 'audio/ogg';
                    break;
                }
            case 'wav':
                {
                    mimeType = 'audio/x-wav';
                    break;
                }
            case 'gif':
                {
                    mimeType = 'image/gif';
                    break;
                }
            case 'jpeg':
            case 'jpg':
            case 'jpe':
                {
                    mimeType = 'image/jpeg';
                    break;
                }
            case 'png':
                {
                    mimeType = 'image/png';
                    break;
                }
            case 'svg':
            case 'svgz':
                {
                    mimeType = 'image/svg+xml';
                    break;
                }
            case 'ico':
                {
                    mimeType = 'image/x-icon';
                    break;
                }
            case 'css':
                {
                    mimeType = 'text/css';
                    break;
                }
            case 'csv':
                {
                    mimeType = 'text/csv';
                    break;
                }
            case 'html':
            case 'htm':
                {
                    mimeType = 'text/html';
                    break;
                }
            case 'txt':
            case 'text':
            case 'conf':
            case 'def':
            case 'list':
            case 'log':
            case 'in':
                {
                    mimeType = 'text/plain';
                    break;
                }
            case 'rtx':
                {
                    mimeType = 'text/richtext';
                    break;
                }
        }
        return mimeType;
    }
}


