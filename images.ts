namespace images {
    /**
     * Print some text on the image duh
     */
    //% blockId=imagesprinttext block="print $i $text at y $y in color $color"
    //% i.shadow=screen_image_picker
    //% color.shadow=colorindexpicker
    export function print(i: Image, text: string, x: number, y: number, color: number) {
        i.print(text, x, y, color)
    }

    /**
     * Print some text on the image duh
     */
    //% blockId=imagesprinttextcenter block="print $i center $text at y $y in color $color"
    //% i.shadow=screen_image_picker
    //% color.shadow=colorindexpicker
    export function printCenter(i: Image, text: string, y: number, color: number) {
        i.printCenter(text, y, color)
    }
}