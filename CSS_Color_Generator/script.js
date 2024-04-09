const Generate = ()=>{
    const border_radius = br.value;
    const border_value = border.value;
    const border_color = boder_color.value;
    

    console.log(border_radius,border_color,border_value);

    const style = `
    border-radius:${border_radius}px;
    border:${border_value}px solid ${border_color};
    `
    output_place.style = style;

    code.innerText = style;
}


