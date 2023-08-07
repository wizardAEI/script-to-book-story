// create a json file and write some data into it
var fs = require('fs');
let originalData = `Type: Dress, skirt, pants, shirt, jacket, coat, shorts, swimwear, underwear.
Material: Cotton, silk, leather, jean, polyester, wool, nylon, lace.
Size: Extra small, small, medium, large, extra-large.
Color: Red, blue, yellow, green, black, white, rainbow, multicolor.
Pattern: Solid, striped, checkered, floral, graphic prints, animal print, polka dots.
Cut: Loose, tight, form-fitting, straight-cut, A-line.
Length: Short, medium, long.
Neckline: V-neck, round, collar, turtleneck, halter.
Sleeve length: Sleeveless, short sleeves, 3/4 sleeves, long sleeves.
Season: Summer, winter, spring, autumn.
Style: Casual, formal, semi-formal, business, vintage, modern, trendy, boho, gothic.
Brand: High-end, mid-range, affordable, fast fashion, luxury.
Fasteners: Buttons, zipper, lace, velcro, hooks, belt.
Embellishments: Beads, sequins, fringes, embroidery, lace, ribbons, bows.
Occasion: Everyday, party, beach, evening, gym, work, wedding.
Age group: Kids, teens, adults, seniors.
Gender: Male, female, unisex.
Washing: Machine wash, hand wash, dry clean.
Condition: New, vintage, second-hand, distressed, worn-out.
Layers: Single, double, padded, lined.
Finished Edges: Hemmed, raw, cuffed, embellished.
Pockets: None, one, multiple, inside, secret.
Transparency: Transparent, semi-transparent, opaque.
Reflectivity: Matte, shiny, metallic.
Climate suitability: Tropical, temperate, cold, desert.
Cultural association: Western, Asian, African, Middle Eastern, Latin.
Historical period: Ancient, medieval, Renaissance, Victorian, Roaring 20s, mid-century, 80s, 90s, contemporary.
Functional features: Waterproof, wind-resistant, quick-dry, breathable, stretch.
Special uses: Uniforms, costumes, ceremonial or ritual, sports, space, underwater.
Designer or fashion house associated.
Trends: Current, outdated, timeless.
Footwear specific - heel height and type, material, closure, type (boots, sandals, loafers).
Accessories specific - material, type (scarf, tie, belt).
Garment type: Shirt, dress, pants, skirt, jacket, coat, robe, or jumpsuit
Silhouette: Fitted, loose, A-line, tailored, flared, or boxy
Length: Long, medium, short, mini, midi, or maxi
Neckline: Round, V-neck, scoop neck, boat neck, off-shoulder, or sweetheart
Sleeve length: Sleeveless, short, long, three-quarter, cap sleeves, or bell sleeves
Fabric texture: Smooth, rough, ribbed, knitted, satin, or sheer
Patterns and prints: Stripes, polka dots, floral, plaid, animal print, or geometric
Colors: Vibrant, neutral, pastel, monochromatic, or contrasting colors
Embellishments: Ruffles, bows, lace, sequins, embroidery, or studs
Collar style: Peter Pan collar, shirt collar, Mandarin collar, or no collar
Waistline: Natural waist, high-waisted, low-waisted, or empire waist
Accessories: Belts, scarves, hats, gloves, brooches, or statement jewelry
Fastenings: Buttons, zippers, snaps, hooks, or ties (e.g., drawstrings)
Hemline style: Straight, asymmetrical, rounded, scalloped, or handkerchief hem
Layering: Cardigans, blazers, vests, shawls, or turtlenecks
Cultural influences: Traditional clothing from different cultures (e.g., kimono, saree, kilt, cheongsam)
Theme or era: Retro/vintage-inspired, futuristic, Victorian, bohemian, or punk
Footwear: Heels, flats, boots, sandals, sneakers, or specific shoe designs
Draping: Flowing, pleated, gathered, or structured
Functionality: Sportswear, formalwear, casual wear, workwear, or activewear
Hood: With hood, without hood, detachable hood.
Sleeves: Puffed, raglan, kimono, dolman, bell, cap, bishop.
Waist: High waist, mid-waist, low waist, empire waist.
Back details: Open back, backless, keyhole, beaded, laced.
Zippers: Front zip, back zip, hidden zip, decorative zip.
Buttons: Wooden, plastic, metal, decorative, fabric covered.
Pleats: Knife pleats, box pleats, kick pleats, accordion pleats.
Textures: Ribbed, smooth, sequined, beaded, pleated, quilted.
Collar: Crew neck, scoop neck, polo, Peter Pan, sailor, shawl.
Cuffs: Button, French, turnback, convertible, cuffless.
Hemline: Asymmetrical, scalloped, handkerchief, straight, curly.
Stitches: Top stitched, edge stitched, twin needle, blind, chain.
Skirt types: Ballgown, straight, pleated, wrap, bubble.
Pants types: Bootcut, skinny, flare, straight, jogger, baggy.
Seams: Flat fell, French, bound, lapped, slot, welt.
Silhouette: Mermaid, A-line, sheath, trumpet, column, empire.
Suit types: Single breasted, double breasted, lounge, dinner, Mandarin.
Sweaters: Cardigan, pullover, turtleneck, crew neck, V-neck.
Prints: Paisley, geometric, abstract, landscape, portraits, graffiti.
Undergarments: Briefs, boxers, bras, corsets, garter belts, stockings.
Trims: Braids, tassels, pompoms, fringes, ribbons, lace.
Ethnic garments: Kimono, sari, kilt, cheongsam, abaya, lederhosen.
Movement: Draped, stiff, flowing, body-hugging, structured.
Specialty garments: Ball gowns, cocktail dresses, swimwear, sports gear, occupational.
Sustainability: Organic, reclaimed, recycled, vegan materials.
Cultural influence: Western, Asian, African, South American, Indigenous, etc.
Decades influence: '20s flapper, '50s rock and roll, '60s mod, '70s disco, '80s power, '90s grunge.
Artistic influence: Art Nouveau, Bauhaus, Baroque, Surrealist, Pop Art.
Embedded technologies: Smart clothing, heating elements, health monitors.
Protective features: Kevlar lining, fire-resistant, insulated, ultraviolet protection.
Future trends: Predicted styles, upcoming seasons.
Celebrity influence: Inspired by, worn by.
Construction techniques: Draping, tailoring, knitting, crocheting.
Type of weave: Twill, satin, plain, jacquard, pile.
Fabric types: Denim, silk, cashmere, linen, velvet, corduroy, or leather
Sleeves: Puff sleeves, bishop sleeves, angel sleeves, lantern sleeves, or kimono sleeves
Waist details: Belt loops, pleats, ruching, peplum, or corsetry
Neckline details: Cowl neck, keyhole, halter neck, choker, or lace-up
Collar variations: Peter Pan collar with lace trim, oversized lapels, shawl collar, standing collar, or mandarin collar
Cutouts: Shoulder cutouts, back cutouts, side cutouts, or keyhole cutouts
Appliques: Embroidered patches, sequin motifs, beading, or lace appliques
Hemline details: Fringe trim, scalloped edges, tassels, or handkerchief hemline with lace trim
Layering techniques: Sheer overlays, lace underlays, cascading ruffles, or contrasting fabrics
Sleeve details: Ruffled cuffs, bell sleeves with fringe, detachable sleeves, or lace inserts
Fastening placement: Asymmetric buttons, side zippers, hidden closures, or wrap-around ties
Military-inspired details: Epaulettes, braided trims, cargo pockets, or double-breasted buttons
Draping techniques: Gathers, pleats, tucks, or ruching
Shoulder details: Padded shoulders, dropped shoulders, or cap sleeves with puffed shoulders
Hemline variations: High-low hemline, fishtail hemline, mermaid silhouette, or handkerchief layers
Athletic wear features: Mesh panels, racerback design, moisture-wicking fabric, or compression zones
Cultural clothing accessories: Hijab, turbans, sarongs, sashes, or fez hats
Formalwear embellishments: Rhinestones, beaded fringes, feather trims, or satin sashes
Retro elements: Peter Pan collars, poodle skirts, saddle shoes, bow ties, or polka dot prints
Futuristic details: Metallic fabrics, LED accents, geometric patterns, or neoprene materials
`
// parse the data into an object
/**
 * @param {string} data 
 * @returns {object} obj
 */
function parse(data) {
    // split the data by new line and take the first word as the key
    let lines = data.split('\n');
    let obj = {};
    for (let line of lines) {
        let words = line.split(':');
        let key = words[0].trim();
        // test if the key is already in the object
        // remove the colon and slip the value by comma
        let values = words[1]?.slice(1).split(',');
        if (obj[key] && values) {
            // if it is, add the value to the array of values if it is not already there
            for (let value of values) {
                if (!obj[key].includes(value.trim())) {
                    obj[key].push(value.trim());
                }
            }
            continue;
        }
        obj[key] = values?.map((value) => value.trim());
    }
    return obj;
}

fs.writeFile('test.json', JSON.stringify(parse(originalData)), (err) => {
    if (err) throw err;
    console.log('Data written to file');
});