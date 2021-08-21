const mapping={
    'क':'k','ख':'K','ग':'g', 'घ':'G','ङ':'NX', 'ह':'h',
    'च':'c','छ':'C','ज':'j','झ':'J','ञ':'Y','य':'y','श':'Z',
    'ट':'V','ठ':'W','ड':'F','ढ':'Q','ण':'N','र':'r','ष':'S',
    'त':'t','थ':'T','द':'d','ध':'D','न':'n','ल':'l','स':'s',
    'प':'p','फ':'P','ब':'b','भ':'B','म':'m','व':'v','ळ':'L','ं':'M',
    '॰':'',//use only by pe...
    'अ':'a','इ':'i','उ':'u','ए':'e','ओ':'o','आ':'aA','ई':'iI','ऊ':'uU','ऐ':'ai','औ':'au',
    'ा':'A','ि':'I','ी':'II','ु':'U','ू':'UU','े':'E','ो':'O', '्':'X',
    '०':'0','१':'1','२':'2','३':'3','४':'4','५':'5','६':'6','७':'7','८':'8','९':'9',
    '।':'|','॥':'||'
}


export default function(content){
    const tokens=content.split(/([ऀ-ॿ]+)/);
    let out='';
    tokens.forEach(tk => {
        if (!tk.match(/[ऀ-ॿ]/)) {
            out+=tk;
        } else {
            for (let i=0;i<tk.length;i++) {
                const ch=mapping[tk[i]];
                if (typeof ch=='undefined') {
                    console.log('wrong char',tk[i],tk);
                } else {
                    out+=ch;                   
                }
            }
        }
    });
    out=out.replace(/‘‘/g,'“').replace(/’’/g,'”')
    return out;
}