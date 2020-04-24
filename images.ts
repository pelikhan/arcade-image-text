namespace images {
    /**
     * Print text on the image
     */
    //% blockId=imagesprinttext block="print $i $text at x $x y $y in color $color"
    //% i.shadow=variables_get
    //% color.shadow=colorindexpicker
    //% group="Text"
    export function print(i: Image, text: string, x: number, y: number, color: number) {
        i.print(text, x, y, color)
    }

    /**
     * Print centered text on the image
     */
    //% blockId=imagesprinttextcenter block="print $i center $text at y $y in color $color"
    //% i.shadow=variables_get
    //% color.shadow=colorindexpicker
    //% group="Text"
    export function printCenter(i: Image, text: string, y: number, color: number) {
        i.printCenter(text, y, color)
    }
}