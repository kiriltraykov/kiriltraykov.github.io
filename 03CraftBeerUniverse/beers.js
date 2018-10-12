var beers = [
  {
    style: "North American Origin Ales",
    subStyle: "American-Style India Pale Ale",
    description: "American-style India pale ales are perceived to have medium-high to intense hop bitterness flavor and aroma with medium-high alcohol content. The style is further characterized by floral fruity citrus-like piney resinous or sulfur-like American-variety hop character. Note that one or more of these American-variety hop characters is the perceived end but the hop characters may be a result of the skillful use of hops of other national origins. The use of water with high mineral content results in a crisp dry beer. This pale gold to deep copper-colored ale has a full flowery hop aroma and may have a strong hop flavor (in addition to the perception of hop bitterness). India pale ales possess medium maltiness which contributes to a medium body. Fruity-ester flavors and aromas are moderate to very strong. Diacetyl can be absent or may be perceived at very low levels. Chill and/or hop haze is allowable at cold temperatures. (English and citrus-like American hops are considered enough of a distinction justifying separate American-style IPA and English-style IPA categories or subcategories. Hops of other origins may be used for bitterness or approximating traditional American or English character. See English-style India Pale Ale",
    count: 4346,
    avgIbu: 68.4,
    avgAbv: 6.7
  },
  {
    style: "North American Origin Ales",
    subStyle: "American-Style Pale Ale",
    description: "American pale ales range from deep golden to copper in color. The style is characterized by fruity floral and citrus-like American-variety hop character producing medium to medium-high hop bitterness flavor and aroma. Note that the \"traditional\" style of this beer has its origins with certain floral fruity citrus-like piney resinous or sulfur-like American hop varietals. One or more of these hop characters is the perceived end but the perceived hop characters may be a result of the skillful use of hops of other national origins. American pale ales have medium body and low to medium maltiness. Low caramel character is allowable. Fruity-ester flavor and aroma should be moderate to strong. Diacetyl should be absent or present at very low levels. Chill haze is allowable at cold temperatures.",
    count: 2995,
    avgIbu: 41.6,
    avgAbv: 5.6
  },
  {
    style: "North American Origin Ales",
    subStyle: "Imperial or Double India Pale Ale",
    description: "Imperial or Double India Pale Ales have intense hop bitterness flavor and aroma. Alcohol content is medium-high to high and notably evident. They range from deep golden to medium copper in color. The style may use any variety of hops. Though the hop character is intense it's balanced with complex alcohol flavors moderate to high fruity esters and medium to high malt character. Hop character should be fresh and lively and should not be harsh in quality. The use of large amounts of hops may cause a degree of appropriate hop haze. Imperial or Double India Pale Ales have medium-high to full body. Diacetyl should not be perceived. The intention of this style of beer is to exhibit the fresh and bright character of hops. Oxidative character and aged character should not be present.",
    count: 1764,
    avgIbu: 97.4,
    avgAbv: 9
  },
  {
    style: "North American Origin Ales",
    subStyle: "American-Style Amber/Red Ale",
    description: "American amber/red ales range from light copper to light brown in color. They are characterized by American-variety hops used to produce the perception of medium hop bitterness flavor and medium aroma. Amber ales have medium-high to high maltiness with medium to low caramel character. They should have medium to medium-high body. The style may have low levels of fruityester flavor and aroma. Diacetyl can be either absent or barely perceived at very low levels. Chill haze is allowable at cold temperatures. Slight yeast haze is acceptable for bottle-conditioned products.",
    count: 1706,
    avgIbu: 36,
    avgAbv: 5.8
  },
  {
    style: "North American Origin Ales",
    subStyle: "Golden or Blonde Ale",
    description: "Golden or Blonde ales are straw to golden blonde in color. They have a crisp dry palate light to medium body and light malt sweetness. Low to medium hop aroma may be present but does not dominate. Bitterness is low to medium. Fruity esters may be perceived but do not predominate. Diacetyl should not be perceived. Chill haze should be absent.",
    count: 1215,
    avgIbu: 21.9,
    avgAbv: 5.2
  },
  {
    style: "North American Origin Ales",
    subStyle: "American-Style Brown Ale",
    description: "American brown ales range from deep copper to brown in color. Roasted malt caramel-like and chocolate-like characters should be of medium intensity in both flavor and aroma. American brown ales have evident low to medium hop flavor and aroma medium to high hop bitterness and a medium body. Estery and fruity-ester characters should be subdued. Diacetyl should not be perceived. Chill haze is allowable at cold temperatures.",
    count: 1198,
    avgIbu: 32.4,
    avgAbv: 6.1
  },
  {
    style: "North American Origin Ales",
    subStyle: "American-Style Stout",
    description: "Initial low to medium malt sweetness with a degree of caramel chocolate and/or roasted coffee flavor with a distinctive dryroasted bitterness in the finish. Coffee-like roasted barley and roasted malt aromas are prominent. Some slight roasted malt acidity is permissible and a medium- to full-bodied mouthfeel is appropriate. Hop bitterness may be moderate to high. Hop aroma and flavor is moderate to high often with American citrus-type and/or resiny hop character. The perception of fruity esters is low. Roasted malt/barley astringency may be low but not excessive. Diacetyl (butterscotch) should be negligible or not perceived. Head retention is excellent.",
    count: 1116,
    avgIbu: 40.2,
    avgAbv: 6.5
  },
  {
    style: "North American Origin Ales",
    subStyle: "American-Style Imperial Stout",
    description: "Black in color American-style imperial stouts typically have a high alcohol content. Generally characterized as very robust. The extremely rich malty flavor and aroma are balanced with assertive hopping and fruity-ester characteristics. Bitterness should be moderately high to very high and balanced with full sweet malt character. Roasted malt astringency and bitterness can be moderately perceived but should not overwhelm the overall character. Hop aroma is usually moderately-high to overwhelmingly hop-floral -citrus or -herbal. Diacetyl (butterscotch) levels should be absent.",
    count: 1067,
    avgIbu: 62.2,
    avgAbv: 10.3
  },
  {
    style: "North American Origin Ales",
    subStyle: "American-Style Black Ale",
    description: "American-style Black Ales are very dark to black and perceived to have medium high to high hop bitterness flavor and aroma with medium-high alcohol content balanced with a medium body. Fruity floral and herbal character from hops of all origins may contribute character. The style is further characterized by a balanced and moderate degree of caramel malt and dark roasted malt flavor and aroma. High astringency and high degree of burnt roast malt character should be absent.",
    count: 537,
    avgIbu: 66.3,
    avgAbv: 7
  },
  {
    style: "North American Origin Ales",
    subStyle: "American-Style Barley Wine Ale",
    description: "American style barley wines range from amber to deep copper-garnet in color and have a full body and high residual malty sweetness. Complexity of alcohols and fruity-ester characters are often high and counterbalanced by assertive bitterness and extraordinary alcohol content. Hop aroma and flavor are at medium to very high levels. American type hops are often used but not necessary for this style. Very low levels of diacetyl may be acceptable. A caramel and/or toffee aroma and flavor are often part of the character. Characters indicating oxidation such as vinous (sometimes sherry-like) aromas and/or flavors are not generally acceptable in American-style Barley Wine Ale however if a low level of age-induced oxidation character harmonizes and enhances the overall experience this can be regarded favorably. Chill haze is allowable at cold temperatures.",
    count: 527,
    avgIbu: 74.9,
    avgAbv: 10.7
  },
  {
    style: "North American Origin Ales",
    subStyle: "American-Style Sour Ale",
    description: "American sour ales can be very light to black or take on the color of added fruits or other ingredients. There is no Brettanomyces character in this style of beer. Wood- and barrel-aged sour ales are classified elsewhere. If acidity is present it is usually in the form of lactic acetic and other organic acids naturally developed with acidified malt in the mash or in fermentation by the use of various microorganisms including certain bacteria and yeasts. Acidic character can be a complex balance of several types of acid and characteristics of age. The evolution of natural acidity develops balanced complexity. Residual flavors that come from liquids previously aged in a barrel such as bourbon or sherry should not be present. Wood vessels may be used during the fermentation and aging process but wood-derived flavors such as vanillin must not be present. In darker versions roasted malt caramel-like and chocolate-like characters should be subtle in both flavor and aroma. American sour may have evident full range of hop aroma and hop bitterness with a full range of body. Estery and fruity-ester characters are evident sometimes moderate and sometimes intense yet balanced. Diacetyl and sweet corn-like dimethylsulfide (DMS) should not be perceived. Chill haze bacteria and yeast-induced haze are allowable at low to medium levels at any temperature. Fruited American-Style Sour Ales will exhibit fruit flavors in harmonious balance with other characters.",
    count: 392,
    avgIbu: 21.1,
    avgAbv: 6.4
  },
  {
    style: "North American Origin Ales",
    subStyle: "Specialty Stouts",
    description: "See British Origin American-Style Imperial Porter Imperial porters are very dark brown to black in color. No roast barley or strong burnt/astringent black malt character should be perceived. Medium malt caramel and cocoa-like sweetness should be in harmony with medium-low to medium hop bitterness. This is a full bodied beer. Ale-like fruity esters should be evident but not overpowering and compliment malt derived sweetness and hop character. Hop flavor and aroma may vary from being low to medium-high. Diacetyl (butterscotch) levels should be absent.",
    count: 262,
    avgIbu: 43.6,
    avgAbv: 7.2
  },
  {
    style: "North American Origin Ales",
    subStyle: "Imperial Red Ale",
    description: "Imperial Red Ales are deep amber to dark copper/reddish brown. A small amount of chill haze is allowable at cold temperatures. Fruity-ester aroma is medium. Hop aroma is intense arising from any variety of hops. Medium to high caramel malt character is present. Hop flavor is intense and balanced with other beer characters. They may use any variety of hops. Hop bitterness is intense. Alcohol content is very high and of notable character. Complex alcohol flavors may be evident. Fruity-ester flavors are medium. Diacetyl should not be perceived. Body is full.",
    count: 240,
    avgIbu: 71.5,
    avgAbv: 8.4
  },
  {
    style: "North American Origin Ales",
    subStyle: "Session India Pale Ale",
    description: "Session India Pale Ales are gold to copper. Chill haze is allowable at cold temperatures and hop haze is allowable at any temperature. Fruity-ester aroma is light to moderate. Hop aroma is medium to high with qualities from a wide variety of hops from all over the world. Low to medium maltiness is present. Hop flavor is strong characterized by flavors from a wide variety of hops. Hop bitterness is medium to high. Fruity-ester flavors are low to moderate. Diacetyl is absent or at very low levels. Body is low to medium.",
    count: 172,
    avgIbu: 47.9,
    avgAbv: 4.7
  },
  {
    style: "North American Origin Ales",
    subStyle: "American-Style Imperial Porter",
    description: "American-style imperial porters are black in color. No roast barley or strong burnt/astringent black malt character should be perceived. Medium malt caramel and cocoa-like sweetness. Hop bitterness is perceived at a medium-low to medium level. Hop flavor and aroma may vary from being low to medium-high. This is a full bodied beer. Ale-like fruity esters should be evident but not overpowering and compliment hop character and malt derived sweetness. Diacetyl (butterscotch) levels should be absent.",
    count: 158,
    avgIbu: 42,
    avgAbv: 8.4
  },
  {
    style: "North American Origin Ales",
    subStyle: "American-Style Strong Pale Ale",
    description: "American strong pale ales range from deep golden to copper in color. The style is characterized by floral and citrus-like American-variety hops used to produce high hop bitterness flavor and aroma. Note that floral fruity citrus-like piney resinous or sulfur-like American-variety hop character is the perceived end but may be a result of the skillful use of hops of other national origins. American strong pale ales have medium body and low to medium maltiness. Low caramel character is allowable. Fruityester flavor and aroma should be moderate to strong. Diacetyl should be absent or present at very low levels. Chill haze is allowable at cold temperatures.",
    count: 114,
    avgIbu: 56.9,
    avgAbv: 7.3
  },
  {
    style: "North American Origin Ales",
    subStyle: "Smoke Porter",
    description: "Smoke porters are chestnut brown to black in color. They can exhibit a mild to assertive smoke character in balance with other beer characters. Black malt character can be perceived in some porters while others may be absent of strong roast character. Roast barley character should be absent. Medium to full malt sweetness caramel and chocolate are acceptable along with medium to medium-high hop bitterness. These beers are usually medium to full bodied. Fruity esters are acceptable. Hop flavor and aroma may vary from being negligible to medium in character.",
    count: 111,
    avgIbu: 37.9,
    avgAbv: 6.9
  },
  {
    style: "North American Origin Ales",
    subStyle: "Fresh \"Wet\" Hop Ale",
    description: "Any style of ale can be made into a fresh hop or wet hop version. These ales are hopped predominantly with fresh (newly harvested and kilned) and/or undried (?wet?) hops. These beers will exhibit especially aromas and flavors of green almost chlorophyll-like or other fresh hop characters in harmony with the characters of the base style of the beer. These beers may be aged and enjoyed after the initial ?fresh-hop? character diminishes. Unique character from ?aged? fresh hop beers may emerge but they have yet to be defined.",
    count: 105,
    avgIbu: 55.7,
    avgAbv: 6.1
  },
  {
    style: "North American Origin Ales",
    subStyle: "American-Style Wheat Wine Ale",
    description: "American style wheat wines range from gold to deep amber and are brewed with 50% or more wheat malt. They have full body and high residual malty sweetness. Perception of bitterness is moderate to medium -high. Fruity-ester characters are often high and counterbalanced by complexity of alcohols and high alcohol content. Hop aroma and flavor are at low to medium levels. Very low levels of diacetyl may be acceptable. Bready wheat honey-like and/or caramel aroma and flavor are often part of the character. Phenolic yeast character sulfur and/or sweet corn-like dimethylsulfide (DMS) should not be present. Oxidized stale and aged characters are not typical of this style. Chill haze is allowable.",
    count: 91,
    avgIbu: 38.3,
    avgAbv: 8.3
  },
  {
    style: "North American Origin Ales",
    subStyle: "Dark American-Belgo-Style Ale",
    description: "These beers must portray the unique characters imparted by yeasts typically used in fruity and big Belgian-Style ales - These beers are not traditional Belgian styles which are already defined. They are unique beers unto themselves. Notes of banana berry apple sometimes coriander spice-like and/or smoky-phenolic characters should be portrayed with balance of hops and malt character when fermented with such yeast. Hop aroma flavor and bitterness not usually found in the base style can be medium to very high and must show the characters of American hop varieties. Dark color falls in the deep amber/brown to black range. Roasted malts or barley may have a range of character from subtle to robust and should be reflected in the overall character and balance of the beer. Esters should be at medium to high levels. Diacetyl should not be evident. Chill haze may be evident. Sulfurlike yeast character should be absent. No Brettanomyces character should be present. An ale which exhibits Brettanomyces character would be classified as \"American-style Brett Ale.\"A statement by the brewer that could include information such as style being elaborated upon and other information about the entry with regard to flavor aroma or appearance is essential for fair assessment in competitions. Beers with Brettanomyces may be subcategorized under this category",
    count: 33,
    avgIbu: 44.3,
    avgAbv: 6.7
  },
  {
    style: "North American Origin Ales",
    subStyle: "Pale American-Belgo-Style Ale",
    description: "These beers must portray the unique characters imparted by yeasts typically used in fruity and big Belgian-Style ales - These beers are not traditional Belgian styles which are already defined. They are unique beers unto themselves. Notes of banana berry apple sometimes coriander spice-like and/or smoky-phenolic characters should be portrayed with balance of hops and malt character when fermented with such yeast. Hop aroma flavor and bitterness not usually found in the base style can be medium to very high and must show the characters of American hop varieties. Color falls in the blonde to amber range. Esters should be at medium to high levels. Diacetyl should not be evident. Chill haze may be evident. Sulfur-like yeast character should be absent.. No Brettanomyces character should be present. An ale which exhibits Brettanomyces character would be classified as \"American-style Brett Ale.\" A statement by the brewer that could include information such as style being elaborated upon and other information about the entry with regard to flavor aroma or appearance is essential for fair assessment in competitions. Beers with Brettanomyces may be subcategorized under this category.",
    count: 32,
    avgIbu: 53.9,
    avgAbv: 6.7
  },
  {
    style: "British Origin Ales",
    subStyle: "Brown Porter",
    description: "Brown porters are mid to dark brown (may have red tint) in color. No roast barley or strong burnt/black malt character should be perceived. Low to medium malt sweetness caramel and chocolate is acceptable along with medium hop bitterness. This is a lightto medium-bodied beer. Fruity esters are acceptable. Hop flavor and aroma may vary from being negligible to medium in character.",
    count: 1176,
    avgIbu: 32.3,
    avgAbv: 6
  },
  {
    style: "British Origin Ales",
    subStyle: "Sweet or Cream Stout",
    description: "Sweet stouts also referred to as cream stouts have less roasted bitter flavor and a full-bodied mouthfeel. The style can be given more body with milk sugar (lactose) before bottling. Malt sweetness chocolate and caramel flavor should dominate the flavor profile and contribute to the aroma. Hops should balance and suppress some of the sweetness without contributing apparent flavor or aroma. The overall impression should be sweet and full-bodied.",
    count: 517,
    avgIbu: 30.2,
    avgAbv: 6.4
  },
  {
    style: "British Origin Ales",
    subStyle: "Oatmeal Stout",
    description: "Oatmeal stouts include oatmeal in their grist resulting in a pleasant full flavor and a smooth profile that is rich without being grainy. A roasted malt character which is caramel-like and chocolate-like should be evident - smooth and not bitter. Coffee-like roasted barley and roasted malt aromas (chocolate and nut-like) are prominent. Color is dark brown to black. Bitterness is moderate not high. Hop flavor and aroma are optional but should not overpower the overall balance if present. This is a medium- to full- bodied beer with minimal fruity esters. Diacetyl should be absent or at extremely low levels. Original gravity range and alcohol levels are indicative of English tradition of oatmeal stout.",
    count: 511,
    avgIbu: 33.6,
    avgAbv: 6.2
  },
  {
    style: "British Origin Ales",
    subStyle: "Extra Special Bitter",
    description: "Extra special bitter possesses medium to strong hop aroma flavor and bitterness. The residual malt and defining sweetness of this richly flavored full-bodied bitter is more pronounced than in other styles of bitter. It is light amber to copper colored with medium to medium-high bitterness. Mild carbonation traditionally characterizes draft-cask versions but in bottled versions a slight increase in carbon dioxide content is acceptable. Fruity-ester character is acceptable in aroma and flavor. Diacetyl (butterscotch character) is acceptable and characteristic when at very low levels. The absence of diacetyl is also acceptable. Chill haze is allowable at cold temperatures. English or American hops may be used. (English and American hop character may be specified in subcategories.)",
    count: 463,
    avgIbu: 40.6,
    avgAbv: 5.7
  },
  {
    style: "British Origin Ales",
    subStyle: "Robust Porter",
    description: "Robust porters are black in color and have a roast malt flavor often reminiscent of cocoa but no roast barley flavor. These porters have a sharp bitterness of black malt without a highly burnt/charcoal flavor. Caramel and other malt sweetness should be present and in harmony with other distinguishing porter characters. Robust porters range from medium to full in body and have a malty sweetness. Hop bitterness is medium to high with hop aroma and flavor ranging from negligible to medium. Diacetyl is acceptable at very low levels. Fruity esters should be evident balanced with roast malt and hop bitterness.",
    count: 445,
    avgIbu: 36.6,
    avgAbv: 6.4
  },
  {
    style: "British Origin Ales",
    subStyle: "Ordinary Bitter",
    description: "Ordinary bitter is gold to copper colored with medium bitterness light to medium body and low to medium residual malt sweetness. Hop flavor and aroma character may be evident at the brewer's discretion. Mild carbonation traditionally characterizes draft-cask versions but in bottled versions a slight increase in carbon dioxide content is acceptable. Fruity-ester character and very low diacetyl (butterscotch) character are acceptable in aroma and flavor but should be minimized in this form of bitter. Chill haze is allowable at cold temperatures. (English and American hop character may be specified in subcategories.)",
    count: 407,
    avgIbu: 32.1,
    avgAbv: 4.9
  },
  {
    style: "British Origin Ales",
    subStyle: "Scotch Ale",
    description: "Scotch ales are overwhelmingly malty and full-bodied. Perception of hop bitterness is very low. Hop flavor and aroma are very low or nonexistent. Color ranges from deep copper to brown. The clean alcohol flavor balances the rich and dominant sweet maltiness in flavor and aroma. A caramel character is often a part of the profile. Dark roasted malt flavors and aroma may be evident at low levels. If present fruity esters are generally at low aromatic and flavor levels. Low diacetyl levels are acceptable. Chill haze is allowable at cold temperatures. Though there is little evidence suggesting that traditionally made strong Scotch ales exhibited peat smoke character the current marketplace offers many Scotch Ales with peat or smoke character present at low to medium levels. Thus a peaty/smoky character may be evident at low levels (ales with medium or higher smoke character would be considered a smoke flavored beer and considered in another category). Scotch Ales may be split into two subcategories: Traditional (no smoke character) and Peated (low level of peat smoke character).",
    count: 320,
    avgIbu: 26.5,
    avgAbv: 7.5
  },
  {
    style: "British Origin Ales",
    subStyle: "Strong Ale",
    description: "Light amber to mid-range brown in color strong ales are medium to full bodied with a malty sweetness and may have low levels of roast malt character. Hop aroma should be minimal and flavor can vary from none to medium in character intensity. Fruity-ester flavors and aromas can contribute to the character of this ale. Bitterness should be minimal but evident and balanced with malt and/or caramel-like sweetness. Alcohol types can be varied and complex. A rich often sweet and complex estery character may be evident. Very low levels of diacetyl are acceptable. Chill haze is acceptable at low temperatures. (This style may often be split into two categories strong and very strong.)",
    count: 320,
    avgIbu: 42.4,
    avgAbv: 8.1
  },
  {
    style: "British Origin Ales",
    subStyle: "English-Style Brown Ale",
    description: "English brown ales range from copper to brown in color. They have medium body and range from dry to sweet maltiness with very little hop flavor or aroma. Roast malt tones may sometimes contribute to the flavor and aroma profile. Low to medium-low levels of fruity-ester flavors are appropriate. Diacetyl should be very low if evident. Chill haze is allowable at cold temperatures.",
    count: 288,
    avgIbu: 25.3,
    avgAbv: 5.4
  },
  {
    style: "British Origin Ales",
    subStyle: "English-Style India Pale Ale",
    description: "Most traditional interpretations of English-style India pale ales are characterized by medium-high hop bitterness with a medium to medium-high alcohol content. Hops from a variety of origins may be used to contribute to a high hopping rate. Earthy and herbal English-variety hop character is the perceived end but may be a result of the skillful use of hops of other national origins. The use of water with high mineral content results in a crisp dry beer sometimes with subtle and balanced character of sulfur compounds. This pale gold to deep copper-colored ale has a medium to high flowery hop aroma and may have a medium to strong hop flavor (in addition to the hop bitterness). English-style India pale ales possess medium maltiness and body. Fruity-ester flavors and aromas are moderate to very strong. Diacetyl can be absent or may be perceived at very low levels. Chill haze is allowable at cold temperatures. Hops of other origins may be used for bitterness or approximating traditional English character.",
    count: 261,
    avgIbu: 59.5,
    avgAbv: 6.2
  },
  {
    style: "British Origin Ales",
    subStyle: "Old Ale",
    description: "Dark amber to brown in color old ales are medium to full bodied with a malty sweetness. Hop aroma should be minimal and flavor can vary from none to medium in character intensity. Fruity-ester flavors and aromas can contribute to the character of this ale. Bitterness should be minimal but evident and balanced with malt and/or caramel-like sweetness. Alcohol types can be varied and complex. A distinctive quality of these ales is that they undergo an aging process (often for years) on their yeast either in bulk storage or through conditioning in the bottle which contributes to a rich wine-like and often sweet oxidation character. Complex estery characters may also emerge. Some very low diacetyl character may be evident and acceptable. Wood aged characters such as vanillin and other woody characters are acceptable. Horsey goaty leathery and phenolic character evolved from Brettanomyces organisms and acidity may be present but should be at low levels and balanced with other flavors Residual flavors that come from liquids previously aged in a barrel such as bourbon or sherry should not be present. Chill haze is acceptable at low temperatures. (This style may often be split into two categories strong and very strong. Brettanomyces organisms and acidic characters reflect historical character. Competition organizers may choose to distinguish these types of old ale from modern versions.)",
    count: 238,
    avgIbu: 39.2,
    avgAbv: 8.3
  },
  {
    style: "British Origin Ales",
    subStyle: "Classic English-Style Pale Ale",
    description: "Classic English pale ales are golden to copper colored and display earthy herbal English-variety hop character. Note that \"earthy herbal English-variety hop character\" is the perceived end but may be a result of the skillful use of hops of other national origins. Medium to high hop bitterness flavor and aroma should be evident. This medium-bodied pale ale has low to medium malt flavor and aroma. Low caramel character is allowable. Fruity-ester flavors and aromas are moderate to strong. Chill haze may be in evidence only at very cold temperatures. The absence of diacetyl is desirable though diacetyl (butterscotch character) is acceptable and characteristic when at very low levels.",
    count: 233,
    avgIbu: 33.9,
    avgAbv: 5
  },
  {
    style: "British Origin Ales",
    subStyle: "Scottish-Style Heavy Ale",
    description: "Scottish heavy ale is moderate in strength and dominated by a smooth sweet maltiness balanced with low but perceptible hop bitterness. Hop flavor or aroma should not be perceived. Scottish heavy ale will have a medium degree of malty caramel-like soft and chewy character in flavor and mouthfeel. It has medium body and fruity esters are very low if evident. Yeast characters such as diacetyl (butterscotch) and sulfuriness are acceptable at very low levels. The color will range from golden amber to deep brown. Bottled versions of this traditional draft beer may contain higher amounts of carbon dioxide than is typical for mildly carbonated draft versions. Chill haze is acceptable at low temperatures. Though there is little evidence suggesting that traditionally made Scottish-style heavy ales exhibited peat smoke character the current marketplace offers many Scottish-style heavy ales with peat or smoke character present at low to medium levels. Thus a peaty/smoky character may be evident at low to medium levels (ales with medium-high or higher smoke character would be considered a smoke flavored beer and considered in another category). Scottish-style heavy ales may be split into two subcategories: Traditional (no smoke character) and Peated (low level of peat smoke character).",
    count: 182,
    avgIbu: 26.4,
    avgAbv: 8
  },
  {
    style: "British Origin Ales",
    subStyle: "English-Style Pale Mild Ale",
    description: "English pale mild ales range from golden to amber in color. Malt flavor dominates the flavor profile with little hop bitterness or flavor. Hop aroma can be light. Very low diacetyl flavors may be appropriate in this low-alcohol beer. Fruity-ester level is very low. Chill haze is allowable at cold temperatures.",
    count: 159,
    avgIbu: 22.1,
    avgAbv: 4.6
  },
  {
    style: "British Origin Ales",
    subStyle: "British-Style Imperial Stout",
    description: "Dark copper to very dark brown British-style imperial stouts typically have high alcohol content. The extremely rich malty flavor (often characterized as toffee-like or caramel-like) and aroma are balanced with medium hopping and high fruity-ester characteristics. Bitterness should be moderate and balanced with sweet malt character. The bitterness may be higher in the darker versions. Roasted malt astringency is very low or absent. Bitterness should not overwhelm the overall character. Hop aroma can be subtle to moderately hop-floral -citrus or -herbal. Diacetyl (butterscotch) levels should be absent.",
    count: 145,
    avgIbu: 66.4,
    avgAbv: 9.5
  },
  {
    style: "British Origin Ales",
    subStyle: "Special Bitter or Best Bitter",
    description: "Special bitter is more robust than ordinary bitter. It has medium body and medium residual malt sweetness. It is deep gold to copper colored. Hop bitterness should be medium and absent of harshness. Hop flavor and aroma character may be evident at the brewer's discretion. Mild carbonation traditionally characterizes draft-cask versions but in bottled versions a slight increase in carbon dioxide content is acceptable. Fruity-ester character is acceptable in aroma and flavor. Diacetyl (butterscotch character) is acceptable and characteristic when at very low levels. The absence of diacetyl is also acceptable. Chill haze is allowable at cold temperatures. (English and American hop character may be specified in subcategories.)",
    count: 140,
    avgIbu: 35,
    avgAbv: 4.7
  },
  {
    style: "British Origin Ales",
    subStyle: "British-Style Barley Wine Ale",
    description: "British-style barley wines range from tawny copper to dark brown in color and have a full body and high residual malty sweetness. Complexity of alcohols and fruity-ester characters are often high and counterbalanced by the perception of low to medium bitterness and extraordinary alcohol content. Hop aroma and flavor may be minimal to medium. English type hops are often used but not necessary for this style. Low levels of diacetyl may be acceptable. Caramel and some characters indicating oxidation such as vinous (sometimes sherry-like) aromas and/or flavors may be considered positive. Chill haze is allowable at cold temperatures.",
    count: 129,
    avgIbu: 56.5,
    avgAbv: 10.7
  },
  {
    style: "British Origin Ales",
    subStyle: "English-Style Dark Mild Ale",
    description: "English dark mild ales range from deep copper to dark brown (often with a red tint) in color. Malt flavor and caramel are part of the flavor and aroma profile while licorice and roast malt tones may sometimes contribute to the flavor and aroma profile. Body should be low-medium to medium. These beers have very little hop flavor or aroma. Very low diacetyl flavors may be appropriate in this low-alcohol beer. Fruity-ester level is very low.",
    count: 106,
    avgIbu: 24,
    avgAbv: 4.5
  },
  {
    style: "British Origin Ales",
    subStyle: "Scottish-Style Light Ale",
    description: "Scottish light ales are light bodied. Little bitterness is perceived and hop flavor or aroma should not be perceived. Despite its lightness Scottish light ale will have a degree of malty caramel-like soft and chewy character. Yeast characters such as diacetyl (butterscotch) and sulfuriness are acceptable at very low levels. The color will range from golden amber to deep brown Bottled versions of this traditional draft beer may contain higher amounts of carbon dioxide than is typical for mildly carbonated draft versions. Chill haze is acceptable at low temperatures. Though there is little evidence suggesting that traditionally made Scottishstyle light ales exhibited peat smoke character the current marketplace offers many Scottish-style light ales with peat or smoke character present at low to medium levels. Thus a peaty/smoky character may be evident at low levels (ales with medium or higher smoke character would be considered a smoke flavored beer and considered in another category). Scottish-style light ales may be split into two subcategories: Traditional (no smoke character) and Peated (low level of peat smoke character).",
    count: 85,
    avgIbu: 26.1,
    avgAbv: 5.6
  },
  {
    style: "British Origin Ales",
    subStyle: "English-Style Summer Ale",
    description: "English Summer Ale is light straw to golden colored with medium-low to medium bitterness light to medium-light body and low to medium residual malt sweetness. Torrefied and/or malted wheat are often used in quantities of 25% or less. Malt flavor may be biscuit-like. English American or Noble-type hop character flavor and aroma are evident and may or may not be assertive yet always well balanced with malt character. Mild carbonation traditionally characterizes draft-cask versions. In bottled versions normal or lively carbon dioxide content is appropriate. The overall impression is refreshing and thirst quenching. Fruity-ester characters are acceptable at low to moderate levels. No butterscotch-like diacetyl or sweet corn-like dimethylsulfide (DMS) should be apparent in aroma or flavor. Chill haze is allowable at cold temperatures.",
    count: 59,
    avgIbu: 23.3,
    avgAbv: 4.9
  },
  {
    style: "British Origin Ales",
    subStyle: "Scottish-Style Export Ale",
    description: "The overriding character of Scottish export ale is sweet caramel-like and malty. Its bitterness is perceived as low to medium. Hop flavor or aroma should not be perceived. It has medium body. Fruity-ester character may be apparent. Yeast characters such as diacetyl (butterscotch) and sulfuriness are acceptable at very low levels. The color will range from golden amber to deep brown. Bottled versions of this traditional draft beer may contain higher amounts of carbon dioxide than is typical for mildly carbonated draft versions. Chill haze is acceptable at low temperatures. Though there is little evidence suggesting that traditionally made Scottish-style export ales exhibited peat smoke character the current marketplace offers many Scottish-style export ales with peat or smoke character present at low to medium levels. Thus a peaty/smoky character may be evident at low to medium levels (ales with medium-high or higher smoke character would be considered a smoke flavored beer and considered in another category). Scottish-style export ales may be split into two subcategories: Traditional (no smoke character) and Peated (low level of peat smoke character).",
    count: 51,
    avgIbu: 21.6,
    avgAbv: 5.5
  },
  {
    style: "British Origin Ales",
    subStyle: "Contemporary Gose",
    description: "Contemporary Goses are straw to medium amber or may take on the hue of added fruits or other ingredients if present. Appearance is cloudy/hazy with yeast character and may have evidence of continued fermentation activity. A wide variety of herbal spice floral or fruity aromas other than found in traditional Leipzig-Style Gose are present in harmony with other aromas. Horsey leathery or earthy aromas contributed by Brettanomyces yeasts may be evident but have a very low profile as this beer is not excessively aged. Hop aroma is not perceived. Malt sweetness is not perceived to very low. They typically contain malted barley and unmalted wheat with some traditional varieties containing oats. Hop flavor is not perceived. Hop bitterness is not perceived. A wide variety of herbal spice floral or fruity flavors other than found in traditional Leipzig-Style Gose are present in harmony with the overall flavor profile. Salt (table salt) character is traditional in low amounts but may vary from absent to present in Contemporary Gose. Horsey leathery or earthy flavors contributed by Brettanomyces yeasts may be evident but have a very low profile as this beer is not excessively aged. Contemporary Gose may be fermented with pure beer yeast strains or with yeast mixed with bacteria. Contemporary Gose may be spontaneously fermented similarly to Belgian-style gueuze/lambic beers and should exhibit complexity of acidic flavor and aroma contributed by introduction of wild yeast and bacteria into the fermentation. Low to medium lactic acid character is evident in all examples as sharp refreshing sourness. A primary difference between Belgian Gueuze and Gose is that Gose is served at a much younger age. Gose is typically enjoyed fresh and carbonated. Overall complexity of flavors and aromas sought while maintaining a balance between acidity yeast-enhanced spice and refreshment is ideal. Body is low to medium-low.",
    count: 44,
    avgIbu: 9.9,
    avgAbv: 4.6
  },
  {
    style: "British Origin Ales",
    subStyle: "Double Red Ale",
    description: "Double Red Ales are deep amber to dark copper/reddish brown. A small amount of chill haze is allowable at cold temperatures. Fruity-ester aroma is medium. Hop aroma is high arising from any variety of hops. Medium to medium-high caramel malt character is present. Low to medium biscuit or toasted characters may also be present. Hop flavor is high and balanced with other beer characters. Hop bitterness is high to very high. Alcohol content is medium to high. Complex alcohol flavors may be evident. Fruity-ester flavors are medium. Diacetyl should not be perceived. Body is medium to full.",
    count: 16,
    avgIbu: 58.3,
    avgAbv: 10.2
  },
  {
    style: "Belgian And French Origin Ales",
    subStyle: "French & Belgian-Style Saison",
    description: "Beers in this category are golden to deep amber in color. There may be quite a variety of characters within this style. Generally: They are light to medium in body. Malt aroma is low to medium-low. Esters are medium to high in  aroma while complex alcohols herbs spices low Brettanomyces character and even clove and smoke-like phenolics may or may not be evident in the overall balanced beer. Hop aroma and flavor may be at low to medium levels. Malt flavor is low but provides foundation for the overall balance. Hop bitterness is moderate to moderately assertive. Herb and/or spice flavors including black pepper-like notes may or may not be evident. Fruitiness from fermentation is generally in character. A balanced small amount of sour or acidic flavors is acceptable when in balance with other components. Earthy cellar-like musty aromas are okay. Diacetyl should not be perceived. Chill or slight yeast haze is okay. Often bottle conditioned with some yeast character and high carbonation. French & Belgian-Style Saison may have Brettanomyces characters that are slightly acidity fruity horsey goaty and/or leather-like.",
    count: 1605,
    avgIbu: 27.5,
    avgAbv: 6.5
  },
  {
    style: "Belgian And French Origin Ales",
    subStyle: "Belgian-Style White (or Wit) / Belgian-Style Wheat",
    description: "Belgian white ales are very pale in color and are brewed using unmalted wheat and malted barley and are spiced with coriander and orange peel. Coriander and light orange peel aroma should be perceived as such or as an unidentified spiciness. Phenolic spiciness and yeast flavors may be evident at mild levels. These beers are traditionally bottle conditioned and served cloudy. An unfiltered starch and yeast haze should be part of the appearance. The low to medium body should have some degree of creaminess from wheat starch. The style is further characterized by the use of noble-type hops to achieve low hop bitterness and little to no apparent hop flavor. This beer has no diacetyl and a low to medium fruity-ester level. Mild acidity is appropriate.",
    count: 787,
    avgIbu: 17.7,
    avgAbv: 5.4
  },
  {
    style: "Belgian And French Origin Ales",
    subStyle: "Belgian-Style Tripel",
    description: "Tripels are often characterized by a complex sometimes mild spicy character. Clove-like phenolic flavor and aroma may be evident at extremely low levels. Yeast-generated  fruity esters including banana are also common but not necessary. These pale/light-colored ales may finish sweet though any sweet finish should be light. The beer is characteristically medium and clean in body with an equalizing hop/malt balance and a perception of medium to medium high hop bitterness. Traditional Belgian Tripels are often well attenuated. Brewing sugar may be used to lighten the perception of body. Its sweetness will come from very pale malts. There should not be character from any roasted or dark malts. Low hop flavor is acceptable. Alcohol strength and flavor should be perceived as evident. Head retention is dense and mousse-like. Chill haze is acceptable at low serving temperatures. Traditional Tripels are bottle conditioned may exhibit slight yeast haze but the yeast should not be intentionally roused. Oxidative character if evident in aged Tripels should be mild and pleasant.",
    count: 597,
    avgIbu: 32.9,
    avgAbv: 9
  },
  {
    style: "Belgian And French Origin Ales",
    subStyle: "Other Belgian-Style Ales",
    description: "Recognizing the uniqueness and traditions of several other styles of Belgian Ales the beers entered in this category will be assessed on the merits that they do not fit existing style guidelines and information that the brewer provides explaining the history and tradition of the style. Balance of character is a key component when assessing these beers. Barrel or wood-aged entries in competitions may be directed to other categories by competition director. In competitions the brewer must provide the historical or regional tradition of the style or his interpretation of the style in order to be assessed properly by the judges.",
    count: 490,
    avgIbu: 36.4,
    avgAbv: 7.5
  },
  {
    style: "Belgian And French Origin Ales",
    subStyle: "Belgian-Style Pale Ale",
    description: "Belgian-style pale ales are characterized by low but noticeable hop bitterness flavor and aroma. Light to medium body and low malt aroma are typical. They are light amber to deep amber in color. Noble-type hops are commonly used. Low to medium fruity esters are evident in aroma and flavor. Low levels of phenolic spiciness from yeast byproducts may be perceived. Low caramel or toasted malt flavor is okay. Diacetyl should not be perceived. Chill haze is allowable at cold temperatures.",
    count: 468,
    avgIbu: 36,
    avgAbv: 6.3
  },
  {
    style: "Belgian And French Origin Ales",
    subStyle: "Belgian-Style Blonde Ale",
    description: "Belgian-style blond ales are characterized by low yet evident hop bitterness flavor and sometimes aroma. Light to medium body and low malt aroma with a sweet spiced and a low to medium fruity-ester character orchestrated in flavor and aroma. Sugar may be used to lighten perceived body. They are blonde to golden in color. Noble-type hops are commonly used. Low levels of phenolic spiciness from yeast byproducts may be perceived. Diacetyl should not be perceived. Acidic character should not be present. Chill haze is allowable at cold temperatures.",
    count: 419,
    avgIbu: 24.3,
    avgAbv: 6.6
  },
  {
    style: "Belgian And French Origin Ales",
    subStyle: "Belgian-Style Dubbel",
    description: "This medium-bodied red to dark brown colored ale has a malty sweetness and chocolate-like caramel aroma. A light hop flavor and/or aroma is acceptable. Dubbels are also characterized by low-medium to medium bitterness. No diacetyl is acceptable. Yeastgenerated fruity esters (especially banana) are appropriate at low levels. Head retention is dense and mousse-like. Chill haze is acceptable at low serving temperatures. Often bottle conditioned a slight yeast haze and flavor may be evident.",
    count: 330,
    avgIbu: 25.5,
    avgAbv: 7.5
  },
  {
    style: "Belgian And French Origin Ales",
    subStyle: "Belgian-Style Dark Strong Ale",
    description: "Belgian dark strong ales are amber to dark brown in color. Often though not always brewed with dark Belgian \"candy\" sugar these beers can be well attenuated ranging from medium to full-bodied. The perception of hop bitterness is low to medium with hop flavor and aroma also in this range. Fruity complexity along with the soft flavors of roasted malts add distinct character. The alcohol strength of these beers can often be deceiving to the senses. The intensity of malt character can be rich creamy and sweet with intensities ranging from medium to high. Very little or no diacetyl is perceived. Herbs and spices are sometimes used to delicately flavor these strong ales. Low levels of phenolic spiciness from yeast byproducts may also be perceived. Chill haze is allowable at cold temperatures.",
    count: 320,
    avgIbu: 30.2,
    avgAbv: 9.2
  },
  {
    style: "Belgian And French Origin Ales",
    subStyle: "Belgian-Style Pale Strong Ale",
    description: "Belgian pale strong ales are pale to golden in color with relatively light body for a beer of its alcoholic strength. Often brewed with light colored Belgian \"candy\" sugar these beers are well attenuated. The perception of hop bitterness is medium-low to medium -high with hop flavor and aroma also in this range. These beers are highly attenuated and have a perceptively deceiving high alcoholic character-being light to medium bodied rather than full bodied. The intensity of malt character should be low to medium often surviving along with a complex fruitiness. Very little or no diacetyl is perceived. Herbs and spices are sometimes used to delicately flavor these strong ales. Low levels of phenolic spiciness from yeast byproducts may also be perceived. Chill haze is allowable at cold temperatures.",
    count: 283,
    avgIbu: 34.5,
    avgAbv: 8.6
  },
  {
    style: "Belgian And French Origin Ales",
    subStyle: "Belgian-Style Quadrupel",
    description: "Quadrupels or \"Quads\" are characterized by the immense presence of alcohol and balanced flavor bitterness and aromas. Its color is deep amber to rich chestnut/garnet brown. Often characterized by a mousse-like dense sometimes amber head will top off a properly poured and served quad. Complex fruity aroma and flavor emerge reminiscent of raisins dates figs grapes plums often accompanied with a hint of winy character. Caramel dark sugar and malty sweet flavors and aromas can be intense not cloying while complementing fruitiness. Though well attenuated it usually has a full creamy body. Hop characters do not dominate; low to low-medium bitterness is perceived. Perception of alcohol can be extreme. Clove-like phenolic flavor and aroma should not be evident. Chill haze is acceptable at low serving temperatures. Diacetyl and DMS should not be perceived. Well balanced with savoring/sipping drinkability. Oxidative character if evident in aged Quads should be mild and pleasant.",
    count: 160,
    avgIbu: 29.8,
    avgAbv: 10.8
  },
  {
    style: "Belgian And French Origin Ales",
    subStyle: "Belgian-Style Flanders Oud Bruin or Oud Red Ales",
    description: "This light- to medium-bodied deep copper to brown ale is characterized by a slight to strong lactic sourness and with \"Reds\" sometimes a balanced degree of acetic acid. Brettanomyces produced flavors and aromas are not part of character. A fruity-estery character which is often cherry-like is apparent with no hop flavor or aroma. Flanders brown ales have low to medium bitterness and a cocoa-like character from roast malt. Roasted malt character in aroma and flavor is acceptable at low levels. A very low degree of malt sweetness may be present and in balance with the acidity produced by Lactobacillus activity. Oak-like or woody characters may be pleasantly integrated into overall palate. Chill haze is acceptable at low serving temperatures. Some versions may be more highly carbonated and when bottle conditioned may appear cloudy (yeast) when served. These final beers are often blended old with new before packaging in order to create the brewer's intended balance of characters.",
    count: 139,
    avgIbu: 22.2,
    avgAbv: 6.9
  },
  {
    style: "Belgian And French Origin Ales",
    subStyle: "French-Style BiŠre de Garde",
    description: "Beers in this category are golden to deep copper or light brown in color. They are light to medium in body. This style of beer is characterized by a toasted malt aroma slight malt sweetness in flavor and low to medium hop bitterness. Noble-type hop aromas and flavors should be low to medium. Fruity esters can be light to medium in intensity. Flavor of alcohol is evident. Earthy cellarlike musty aromas are okay. Diacetyl should not be perceived but chill haze is okay. Often bottle conditioned with some yeast character. French-Style Bi‚re de Garde may have Brettanomyces characters that are slightly acidity fruity horsey goaty and/or leather-like.",
    count: 135,
    avgIbu: 24.1,
    avgAbv: 6.9
  },
  {
    style: "Belgian And French Origin Ales",
    subStyle: "Belgian-Style Fruit Lambic",
    description: "These beers also known by the names framboise kriek peche cassis etc. are characterized by fruit flavors and aromas. The color reflects the choice of fruit. Sourness is an important part of the flavor profile though sweetness may compromise the intensity. These flavored lambic beers may be very dry or mildly sweet and range from a dry to a full-bodied mouthfeel. Characteristic horsey goaty leathery and phenolic character evolved from Brettanomyces yeast is often present at moderate levels. Vanillin and other woody flavors should not be evident. Versions of this beer made outside of the Brussels area of Belgium cannot be true lambics. These versions are said to be \"lambic-style\" and may be made to resemble many of the beers of true origin. Historically traditional lambics are dry and completely attenuated exhibiting no residual sweetness either from malt sugar fruit or artificial sweeteners. Some versions often have a degree of sweetness contributed by fruit sugars other sugars or artificial sweeteners. Competition organizers may choose to subcategorize this style into A) Traditional and B) Sweet.  Artificial sweeteners are sometimes used in some brands.",
    count: 122,
    avgIbu: 21.1,
    avgAbv: 5.9
  },
  {
    style: "Belgian And French Origin Ales",
    subStyle: "Belgian-Style Lambic",
    description: "Unblended naturally and spontaneously fermented lambic is intensely estery sour and sometimes but not necessarily acetic flavored. Low in carbon dioxide these hazy beers are brewed with unmalted wheat and malted barley. Sweet malt characters are not perceived. They are very low in hop bitterness. Cloudiness is acceptable. These beers are quite dry and light bodied. Characteristic horsey goaty leathery and phenolic character evolved from Brettanomyces yeast is often present at moderate levels. Versions of this beer made outside of the Brussels area of Belgium cannot be true lambics. These versions are said to be \"lambicstyle\" and may be made to resemble many of the beers of true origin. Vanillin and other wood-derived flavors should not be evident. Historically traditional lambic is dry and completely attenuated exhibiting no residual sweetness either from malt sugar or artificial sweeteners. Sweet versions may be created through addition of sugars or artificial sweeteners. Competition organizers may choose to subcategorize this style into A) Traditional and B) Sweet. Artificial sweeteners are sometimes used in some brands.",
    count: 33,
    avgIbu: 7.3,
    avgAbv: 6.2
  },
  {
    style: "Belgian And French Origin Ales",
    subStyle: "Belgian-Style Table Beer",
    description: "These ales and lagers are very low in alcohol and historically in Belgium enjoyed with meals by both adults and children. Pale to very dark brown in color. Additions of caramel coloring are sometimes employed to adjust color. They are light bodied with relatively low carbonation with limited aftertaste. The mouth feel is light to moderate though higher than one might anticipate usually because of unfermented sugars/malt sugars. Malted barley wheat and rye may be used as well as unmalted wheat rye oats and corn. A mild malt character could be evident. Aroma/Flavor hops are most commonly used to employ a flavor balance that is only low in bitterness. Traditional versions do not use artificial sweeteners nor are they excessively sweet. More modern versions of this beer incorporate sweeteners such as sugar and saccharine added post fermentation to sweeten the palate and add to a perception of smoothness. Spices (such as orange and lemon peel as well as coriander) may be added in barely perceptible amounts but this is not common. Diacetyl should not be perceived. Competition directors may choose to break out subcategories of Traditional and Modern.",
    count: 25,
    avgIbu: 20.9,
    avgAbv: 4.4
  },
  {
    style: "Belgian And French Origin Ales",
    subStyle: "Belgian-Style Gueuze Lambic",
    description: "Old lambic is blended with newly fermenting young lambic to create this special style of lambic. Gueuze is always referrmented in the bottle. These unflavored blended and secondary fermented lambic beers may be very dry or mildly sweet and are characterized by intense fruity-estery sour and acidic aromas and flavors. These pale beers are brewed with unmalted wheat malted barley and stale aged hops. Sweet malt characters are not perceived. They are very low in hop bitterness. Diacetyl should be absent. Characteristic horsey goaty leathery and phenolic character evolved from Brettanomyces yeast is often present at moderate levels. Cloudiness is acceptable. These beers are quite dry and light bodied. Vanillin and other wood-derived flavors should not be evident. Versions of this beer made outside of the Brussels area of Belgium cannot be true lambics. These versions are said to be \"lambic-style\" and may be made to resemble many of the beers of true origin. Historically traditional gueuze lambics are dry and completely attenuated exhibiting no residual sweetness either from malt sugar or artificial sweeteners. Some versions often have a degree of sweetness contributed by sugars or artificial sweeteners. Competition organizers may choose to subcategorize this style into A) Traditional and B) Sweet.  Artificial sweeteners are sometimes used in some brands.",
    count: 19,
    avgIbu: "",
    avgAbv: 6
  },
  {
    style: "German Origin Ales",
    subStyle: "South German-Style Hefeweizen / Hefeweissbier",
    description: "The aroma and flavor of a Weissbier with yeast is decidedly fruity and phenolic. The phenolic characteristics are often described as clove- nutmeg-like mildly smoke-like or even vanilla-like. Banana-like esters should be present at low to medium-high levels. These beers are made with at least 50 percent malted wheat and hop rates are quite low. Hop flavor and aroma are absent or present at very low levels. Weissbier is well attenuated and very highly carbonated and a medium to full bodied beer. The color is very pale to pale amber. Because yeast is present the beer will have yeast flavor and a characteristically fuller mouthfeel and may be appropriately very cloudy. No diacetyl should be perceived.",
    count: 929,
    avgIbu: 15.3,
    avgAbv: 5.2
  },
  {
    style: "German Origin Ales",
    subStyle: "German-Style K”lsch / K”ln-Style K”lsch",
    description: "K”lsch is warm fermented and aged at cold temperatures (German ale or alt-style beer). K”lsch is characterized by a golden to straw color and a slightly dry subtly sweet softness on the palate yet crisp. Good dense head retention is desirable. Light pearapple-Riesling wine-like fruitiness may be apparent but is not necessary for this style. Caramel character should not be evident. The body is light to medium-light. This beer has low hop flavor and aroma with medium bitterness. Wheat can be used in brewing this beer. Ale yeast is used for fermentation though lager yeast is sometimes used in the bottle or final cold conditioning process. Fruity esters should be minimally perceived if at all. Chill haze should be absent.",
    count: 464,
    avgIbu: 23.5,
    avgAbv: 5
  },
  {
    style: "German Origin Ales",
    subStyle: "Berliner-Style Weisse (Wheat)",
    description: "This is very pale in color and the lightest of all the German wheat beers. The unique combination of yeast and lactic acid bacteria fermentation yields a beer that is acidic highly attenuated and very light bodied. The carbonation of a Berliner Weisse is high and hop rates are very low. Clarity may be hazy or cloudy from yeast or chill haze. Hop character should not be perceived. Fruity esters will be evident. No diacetyl should be perceived.",
    count: 267,
    avgIbu: 9.5,
    avgAbv: 4.3
  },
  {
    style: "German Origin Ales",
    subStyle: "German-Style Altbier",
    description: "German-Style Altbiers are copper to dark brown ales originally from the Dsseldorf area. No chill haze should be perceived. A variety of malts including wheat may be used to produce medium-low to medium malt aroma. Fruityester aroma can be low. No diacetyl aroma should be perceived. Hop aroma is low to medium. A variety of malts including wheat may be used to produce medium-low to medium level malty flavor. Hop flavor is low to medium. Hop bitterness is medium to very high (although the 25 to 35 IBU range is more normal for the majority of Altbiers from Dsseldorf). Fruity-ester flavors can be low. No diacetyl should be perceived. The overall impression is clean crisp and flavorful often with a dry finish. Body is medium.",
    count: 266,
    avgIbu: 37.4,
    avgAbv: 5.7
  },
  {
    style: "German Origin Ales",
    subStyle: "South German-Style Dunkel Weizen / Dunkel Weissbier",
    description: "This beer style is characterized by a distinct sweet maltiness and a chocolate-like character from roasted malt. Estery and phenolic elements of this Weissbier should be evident but subdued. Color can range from copper-brown to dark brown. Dunkel Weissbier is well attenuated and very highly carbonated and hop bitterness is low. Hop flavor and aroma are absent. Usually dark barley malts are used in conjunction with dark cara or color malts and the percentage of wheat malt is at least 50 percent. If this is served with yeast the beer may be appropriately very cloudy. No diacetyl should be perceived.",
    count: 257,
    avgIbu: 17.8,
    avgAbv: 5.5
  },
  {
    style: "German Origin Ales",
    subStyle: "Bamberg-Style Weiss (Smoke) Rauchbier (Dunkel or Helles)",
    description: "Bamberg-style Weiss Rauchbier should have smoky characters that range from detectable to prevalent in the aroma and flavor. Smoke character is not harshly phenolic but rather very smooth almost rendering a perception of mild sweetness to this style of beer. The aroma and flavor of a Weissbier with yeast is decidedly fruity and phenolic. The phenolic characteristics are often described as clove- or nutmeg-like and can be smoky or even vanilla-like. Banana-like esters are often present. These beers are made with at least 50 percent malted wheat and hop rates are quite low. Hop flavor and aroma are absent. Weissbier is well attenuated and very highly carbonated and a medium- to full-bodied beer. The color is very pale to very dark amber. Darker (dunkel) styles should have a detectable degree of roast malt in the balance without being robust in overall character. Because yeast is present the beer will have yeast flavor and a characteristically fuller mouthfeel and may be appropriately very cloudy. No diacetyl should be perceived.",
    count: 133,
    avgIbu: 24.7,
    avgAbv: 5.4
  },
  {
    style: "German Origin Ales",
    subStyle: "South German-Style Weizenbock / Weissbock",
    description: "This style can be either pale or dark (golden to dark brown in color) and has a high starting gravity and alcohol content. The malty sweetness of a Weizenbock is balanced with a clove-like phenolic and fruity-estery banana element to produce a wellrounded aroma and flavor. As is true with all German wheat beers hop bitterness is low and carbonation is high. Hop flavor and aroma are absent. It has a medium to full body. If dark a mild roast malt character should emerge in flavor and to a lesser degree in the aroma. If this is served with yeast the beer may be appropriately very cloudy. No diacetyl should be perceived.",
    count: 121,
    avgIbu: 21.9,
    avgAbv: 7.9
  },
  {
    style: "German Origin Ales",
    subStyle: "Kellerbier (Cellar beer) or Zwickelbier - Ale",
    description: "These beers are unfiltered German-style Altbier and K”lsch. They are packaged and/or served intentionally with low to moderate amounts of yeast. Products may be filtered and again dosed with yeast in the package manifesting themselves as bottle conditioned beers or unfiltered beer with yeast present. They will most likely not be clear and may appear slightly hazy to moderately cloudy. Yeast character flavor and aroma are desirable yet should be low to medium but not overpowering the balance and character of malt and hops. Low to moderately low levels of yeast-generated sulfur containing compounds should be apparent in aroma and flavor and low levels of acetaldehyde or other volatiles normally removed during fermentation may or may not be apparent. The sulfur and acetaldehyde characters should contribute positively to the beer drinking experience. Head retention may not be optimal. The brewer must indicate the classic style on which the entry is based to allow for accurate judging. Beer entries not accompanied by this information will be at a disadvantage during evaluation.",
    count: 90,
    avgIbu: 33,
    avgAbv: 5.1
  },
  {
    style: "German Origin Ales",
    subStyle: "Leipzig-Style Gose",
    description: "Traditional examples of Gose are spontaneously fermented similarly to Belgian-style gueuze/lambic beers and should exhibit complexity of acidic flavor and aroma contributed by introduction of wild yeast and bacteria into the fermentation. A primary difference between Belgian Gueuze and German Gose is that Gose is served at a much younger age. Gose is typically pale gold to pale amber in color and typically contains malted barley unmalted wheat with some traditional varieties containing oats. Hop character and malt flavors and aromas are negligible. Lemony or other citrus-like qualities are often present in aroma and on the palate. Some versions may have the spicy character of added coriander in aroma and on the palate at low to medium levels. Salt (table salt) character is also traditional in low amounts. Horsey leathery earthy aroma and flavors contributed by Brettanomyces yeasts may be evident but have a very low profile as this beer is not excessively aged. Modern German Gose breweries typically introduce only pure beer yeast strains for fermentation. Low to medium lactic acid character is evident in all examples as sharp refreshing sourness. Gose is typically enjoyed fresh carbonated and cloudy/hazy with yeast character and may have evidence of continued fermentation activity. Overall complexity of flavors and aromas are sought while maintaining an ideal balance between acidity yeast-enhanced spice and refreshment is ideal.",
    count: 79,
    avgIbu: 12.9,
    avgAbv: 4.7
  },
  {
    style: "German Origin Ales",
    subStyle: "German-Style Leichtes Weizen / Weissbier",
    description: "The German word leicht means light and as such these beers are light versions of Hefeweizen. Leicht Weissbier is top fermented and cloudy like Hefeweizen. The phenolic and estery aromas and flavors typical of Weissbiers are more subdued in Leichtes Weizen. Hop flavor and aroma are normally absent. The overall flavor profile is less complex than Hefeweizen due to decreased alcohol content. There is less yeasty flavor present. Leichtes Weissbier has diminished mouth feel relative to Hefeweizen and is a low-bodied beer. No diacetyl should be perceived. The beer may have a broad range of color from pale golden to pale amber.",
    count: 59,
    avgIbu: 12.1,
    avgAbv: 5.4
  },
  {
    style: "German Origin Ales",
    subStyle: "South German-Style Kristall Weizen / Kristall Weissbier",
    description: "The aroma and flavor of a Weissbier without yeast is very similar to Weissbier with yeast (Hefeweizen/Hefeweissbier) with the caveat that fruity and phenolic characters are not combined with the yeasty flavor and fuller-bodied mouthfeel of yeast. The phenolic characteristics are often described as clove- or nutmeg-like and can be smoky or even vanilla-like. Banana-like esters are often present. These beers are made with at least 50 percent malted wheat and hop rates are quite low. Hop flavor and aroma are absent. Weissbier is well attenuated and very highly carbonated yet its relatively high starting gravity and alcohol content make it a medium- to full-bodied beer. The color is very pale to deep golden. Because the beer has been filtered yeast is not present. The beer will have no flavor of yeast and a cleaner drier mouthfeel. The beer should be clear with no chill haze present. No diacetyl should be perceived.",
    count: 52,
    avgIbu: 19,
    avgAbv: 5.1
  },
  {
    style: "German Origin Ales",
    subStyle: "South German-Style Bernsteinfarbenes Weizen / Weissbier",
    description: "The German word Bernsteinfarben means amber colored and as such a Bernsteinfarbenes Weizen is dark yellow to amber in color. This beer style is characterized by a distinct sweet maltiness and caramel or bready character from the use of medium colored malts. Estery and phenolic elements of this Weissbier should be evident but subdued. Bernsteinfarbenes Weissbier is well attenuated and very highly carbonated and hop bitterness is low. Hop flavor and aroma are absent. The percentage of wheat malt is at least 50 percent. If this is served with yeast the beer may be appropriately very cloudy. No diacetyl should be perceived.",
    count: 10,
    avgIbu: 15.3,
    avgAbv: 5.4
  },
  {
    style: "German Origin Ales",
    subStyle: "Adambier",
    description: "Adambier is light brown to very dark in color. It may or may not use wheat in its formulation. Original styles of this beer may have a low or medium low degree of smokiness. Smoke character may be absent in contemporary versions of this beer. Astringency of highly roasted malt should be absent. Toast and caramel-like malt characters may be evident. Low to medium hop bitterness are perceived. Low hop flavor and aroma are perceived. It is originally a style from Dortmund. Adambier is a strong dark hoppy sour ale extensively aged in wood barrels. Extensive aging and the acidification of this beer can mask malt and hop character to varying degrees. Traditional and non-hybrid varieties of European hops were traditionally used. A K”lsch-like ale fermentation is typical Aging in barrels may contribute some level of Brettanomyces and lactic character. The end result is a medium to full bodied complex beer in hop malt Brett and acidic balance.",
    count: 2,
    avgIbu: 35,
    avgAbv: 10.5
  },
  {
    style: "Irish Origin Ales",
    subStyle: "Irish-Style Red Ale",
    description: "Irish-style red ales range from light red-amber-copper to light brown in color. These ales have a medium hop bitterness and flavor. They often don't have hop aroma. Irish-style red ales have low to medium candy-like caramel malt sweetness and may have a balanced subtle degree of roast barley or roast malt character and complexity.  Irish-style Red Ales have a medium body. The style may have low levels of fruity-ester flavor and aroma. Diacetyl should be absent or at very low levels. Chill haze is allowable at cold temperatures. Slight yeast haze is acceptable for bottle-conditioned products.",
    count: 468,
    avgIbu: 28.2,
    avgAbv: 5.5
  },
  {
    style: "Irish Origin Ales",
    subStyle: "Classic Irish-Style Dry Stout",
    description: "Dry stouts have an initial malt and light caramel flavor profile with a distinctive dry-roasted bitterness in the finish. Dry stouts achieve a dry-roasted character through the use of roasted barley. The emphasis of coffee-like roasted barley and a moderate degree of roasted malt aromas define much of the character. Some slight acidity may be perceived but is not necessary. European hop aroma and flavor should be low or not perceived. Dry stouts have medium-light to medium body. Fruity esters are minimal and overshadowed by malt high hop bitterness and roasted barley character. Diacetyl (butterscotch) should be very low or not perceived. Head retention and rich character should be part of its visual character.",
    count: 243,
    avgIbu: 36,
    avgAbv: 5
  },
  {
    style: "Irish Origin Ales",
    subStyle: "Foreign (Export)-Style Stout",
    description: "As with classic dry stouts foreign-style stouts have an initial malt sweetness and caramel flavor with a distinctive dry-roasted bitterness in the finish. Coffee-like roasted barley and roasted malt aromas are prominent. Some slight acidity is permissible and a medium- to full-bodied mouthfeel is appropriate. Bitterness may be high but the perception is often compromised by malt sweetness. Hop aroma and flavor should not be perceived. The perception of fruity esters is low. Diacetyl (butterscotch) should be negligible or not perceived. Head retention is excellent.",
    count: 129,
    avgIbu: 41.9,
    avgAbv: 6.7
  },
  {
    style: "International Ale Styles",
    subStyle: "International-Style Pale Ale",
    description: "International-style pale ales range from deep golden to copper in color. The style is characterized by wide range of hop characters unlike fruity floral and citrus-like American-variety hop character and unlike earthy herbal English-variety hop character. Moderate to high hop bitterness flavor and aroma is evident. International pale ales have medium body and low to medium maltiness. Low caramel character is allowable. Fruity-ester flavor and aroma should be moderate to strong. Diacetyl should be absent or present at very low levels. Chill haze is allowable at cold temperatures.",
    count: 50,
    avgIbu: 68.9,
    avgAbv: 5.3
  },
  {
    style: "International Ale Styles",
    subStyle: "Australian-Style Pale Ale",
    description: "Australian-Style Pale Ales are light amber to light brown. Chill or hop haze may be evident. Hop aroma is often reminiscent of tropical fruit such as mango passion fruit and other tropical fruit character. Intensity can be low to medium-high. Malt character has a perceived low to medium caramel-candy sweetness. Hop flavor is aligned with aroma; tropical fruit such as mango passion fruit and other tropical fruit character. Intensity can be low to mediumhigh. Hop bitterness is low to medium. Fruity-ester aroma should be perceived. Diacetyl should be very low if present. DMS aroma should not be present. Body is low to medium.",
    count: 22,
    avgIbu: 32.6,
    avgAbv: 4.8
  },
  {
    style: "European-germanic Lager",
    subStyle: "German-Style Pilsener",
    description: "A classic German Pilsener is very light straw or golden in color and well hopped. Perception of hop bitterness is medium to high. Noble-type hop aroma and flavor are moderate and quite obvious. It is a well-attenuated medium-light bodied beer but a malty residual sweetness can be perceived in aroma and flavor. Very low levels of sweet corn-like dimethylsulfide (DMS) character are below most beer drinkers' taste thresholds and are usually not detectable except to the trained or sensitive palate. Other fermentation or hop related sulfur compounds when perceived at low levels may be characteristic of this style. Fruity esters and diacetyl should not be perceived. There should be no chill haze. Its head should be dense and rich.",
    count: 592,
    avgIbu: 33.3,
    avgAbv: 5.1
  },
  {
    style: "European-germanic Lager",
    subStyle: "German-Style M„rzen",
    description: "M„rzens are characterized by a medium body and broad range of color. They can range from golden to reddish orange. Sweet maltiness should dominate slightly over a clean hop bitterness. Malt character should be light-toasted rather than strongly caramel (though a low level of light caramel character is acceptable). Bread or biscuit-like malt character is acceptable in aroma and flavor. Hop aroma and flavor should be low but notable. Ale-like fruity esters should not be perceived. Diacetyl and chill haze should not be perceived.",
    count: 348,
    avgIbu: 25.8,
    avgAbv: 5.7
  },
  {
    style: "European-germanic Lager",
    subStyle: "German-Style Doppelbock",
    description: "Malty sweetness is dominant but should not be cloying. Malt character is more reminiscent of fresh and lightly toasted Munich- style malt more so than caramel or toffee malt character. Some elements of caramel and toffee can be evident and contribute to complexity but the predominant malt character is an expression of toasted barley malt. Doppelbocks are full bodied and deep amber to dark brown in color. Astringency from roast malts is absent. Alcoholic strength is high and hop rates increase with gravity. Hop bitterness and flavor should be low and hop aroma absent. Fruity esters are commonly perceived but at low to moderate levels. Diacetyl should be absent",
    count: 329,
    avgIbu: 28.6,
    avgAbv: 8
  },
  {
    style: "European-germanic Lager",
    subStyle: "German-Style Heller Bock/Maibock",
    description: "The German word helle means light colored and as such a heller Bock is light straw to deep golden in color. Maibocks are also light-colored bocks. The sweet malty character should come through in the aroma and flavor. A lightly toasted and/or bready malt character is often evident. Roast or heavy toast/caramel malt character should be absent. Body is medium to full. Hop bitterness should be low while noble-type hop aroma and flavor may be at low to medium levels. Bitterness increases with gravity. Fruity esters may be perceived at low levels. Diacetyl should be absent. Chill haze should not be perceived.",
    count: 270,
    avgIbu: 28.9,
    avgAbv: 6.8
  },
  {
    style: "European-germanic Lager",
    subStyle: "Vienna-Style Lager",
    description: "Beers in this category are reddish brown or copper colored. They are medium in body. The beer is characterized by malty aroma and slight malt sweetness. The malt aroma and flavor should have a notable degree of toasted and/or slightly roasted malt character. Hop bitterness is clean and crisp. Noble-type hop aromas and flavors should be low or mild. Diacetyl chill haze and ale-like fruity esters should not be perceived.",
    count: 229,
    avgIbu: 23.8,
    avgAbv: 5.2
  },
  {
    style: "European-germanic Lager",
    subStyle: "German-Style Schwarzbier",
    description: "These very dark brown to black beers have a mild roasted malt character without the associated bitterness. This is not a fullbodied beer but rather a moderate body gently enhances malt flavor and aroma with low to moderate levels of sweetness. Hop bitterness is low to medium in character. Noble-type hop flavor and aroma should be low but perceptible. There should be no fruity esters. Diacetyl should not be perceived.",
    count: 225,
    avgIbu: 27.6,
    avgAbv: 5.4
  },
  {
    style: "European-germanic Lager",
    subStyle: "Dortmunder / European-Style Export",
    description: "Dortmunder has medium hop bitterness. Hop flavor and aroma from noble hops are perceptible but low. Sweet malt flavor can be low and should not be caramel-like. The color of this style is straw to deep golden. The body will be medium bodied. Fruity esters chill haze and diacetyl should not be perceived.",
    count: 215,
    avgIbu: 28.3,
    avgAbv: 5.6
  },
  {
    style: "European-germanic Lager",
    subStyle: "Bohemian-Style Pilsener",
    description: "Traditional Bohemian Pilseners are medium bodied and they can be as dark as a light amber color. This style balances moderate bitterness and noble-type hop aroma and flavor with a malty slightly sweet medium body. Extremely low levels of diacetyl and low levels of sweet corn-like dimethylsulfide (DMS) character if perceived are characteristic of this style and both may accent malt aroma. A toasted- biscuit-like bready malt character along with low levels of sulfur compounds may be evident. There should be no chill haze. Its head should be dense and rich.",
    count: 209,
    avgIbu: 33.9,
    avgAbv: 5.1
  },
  {
    style: "European-germanic Lager",
    subStyle: "Traditional German-Style Bock",
    description: "Traditional bocks are made with all malt and are strong malty medium- to full-bodied bottom-fermented beers with moderate hop bitterness that should increase proportionately with the starting gravity. Malt character should be a balance of sweetness and toasted/nut-like malt; not caramel. Hop flavor should be low and hop aroma should be very low. Bocks can range in color from deep copper to dark brown. Fruity esters should be minimal. Diacetyl should be absent.",
    count: 206,
    avgIbu: 25,
    avgAbv: 6.9
  },
  {
    style: "European-germanic Lager",
    subStyle: "Mnchner (Munich)-Style Helles",
    description: "This beer should be perceived as having low bitterness. It is a medium-bodied malt-emphasized beer with malt character often balanced with low levels of yeast produced sulfur compounds (character). Certain renditions of this beer style have  a perceivable level of hop flavor (note: hop flavor does not imply hop bitterness) and character but it is essentially balanced with malt character to retain its style identity. Malt character is sometimes bread-like yet always reminiscent of freshly and very lightly toasted malted barley. There should not be any caramel character. Color is light straw to golden. Fruity esters and diacetyl should not be perceived. There should be no chill haze.",
    count: 194,
    avgIbu: 20.2,
    avgAbv: 5.2
  },
  {
    style: "European-germanic Lager",
    subStyle: "German-Style Oktoberfest / Wiesen (Meadow)",
    description: "Today's Oktoberfest beers are characterized by a medium body and light golden color. Sweet maltiness is mild with an equalizing balance of clean hop bitterness. Hop aroma and flavor should be low but notable. Ale-like fruity esters should not be perceived. Diacetyl and chill haze should not be perceived. Similar or equal to Dortmunder/European-Style Export",
    count: 170,
    avgIbu: 24.9,
    avgAbv: 5.6
  },
  {
    style: "European-germanic Lager",
    subStyle: "European-Style Dark / Mnchner Dunkel",
    description: "These light brown to dark brown beers have a pronounced malty aroma and flavor that dominates over the clean crisp moderate hop bitterness. This beer does not offer an overly sweet impression but rather a mild balance between malt sweetness hop bitterness and light to moderate mouthfeel. A classic Mnchner Dunkel should have chocolate-like roast malt bread-like or biscuit-like aroma that comes from the use of Munich dark malt. Chocolate or roast malts can be used but the percentage used should be minimal. Noble-type hop flavor and aroma should be low but perceptible. Diacetyl should not be perceived. Ale-like fruity esters and chill haze should not be perceived.",
    count: 138,
    avgIbu: 25,
    avgAbv: 5.4
  },
  {
    style: "European-germanic Lager",
    subStyle: "German-Style Leichtbier",
    description: "These beers are very light in body and color. Malt sweetness is perceived at low to medium levels while hop bitterness character is perceived at medium levels. Hop flavor and aroma may be low to medium. These beers should be clean with no perceived fruity esters or diacetyl. Very low levels of sulfur related compounds acceptable. Chill haze is not acceptable.",
    count: 124,
    avgIbu: 24,
    avgAbv: 2.9
  },
  {
    style: "European-germanic Lager",
    subStyle: "Kellerbier (Cellar beer) or Zwickelbier - Lager",
    description: "Traditional Version of Kellerbier: Unfiltered lagered versions of Germanic lager styles of beer such as Mnchner-Style Helles and Dunkel Dortmunder/European-Style Export Bohemian-style Pilsener and German-style Pilsener. Kellerbier is noticeably less carbonated. Subtle or low levels of esters may be apparent. This is an unfiltered beer but it may be naturally clear due to settling of yeast during aging. They may or may not be clear. Exhibiting a small amount of yeast haze in the appearance is acceptable. Low to moderately low levels of yeast-generated sulfur compounds in aroma and flavor should be apparent and low levels of acetaldehyde or other volatiles normally scrubbed during fermentation may or may not be apparent. The sulfur and acetaldehyde characters should contribute positively to the beer drinking experience. There should be no diacetyl detectable. Dry hopping is acceptable. Head retention may not be optimal. Contemporary Version of Kellerbier: Beers that are packaged or on draft which are unfiltered versions of other lager styles. These may share many attributes of traditional versions but are generally fully carbonated fully lagered with full head retention and absent of acetaldehyde.",
    count: 40,
    avgIbu: 26.5,
    avgAbv: 5.3
  },
  {
    style: "European-germanic Lager",
    subStyle: "Bamberg-Style Helles Rauchbier",
    description: "Helles Rauchbier should have beech wood smoky characters that range from detectable to prevalent in the aroma and flavor. Smoke character is not harshly phenolic but rather very smooth almost rendering a perception of mild sweetness to this style of beer. This is a medium-bodied smoke and malt-emphasized beer with malt character often balanced with low levels of yeast produced sulfur compounds (character). This beer should be perceived as having low bitterness. Certain renditions of this beer style approach a perceivable level of hop flavor (note: hop flavor does not imply hop bitterness) and character but it is essentially balanced with malt character to retain its style identity. Helles Rauchbier malt character is reminiscent of freshly and very lightly toasted sweet malted barley. There should not be any caramel character. Color is light straw to golden. Noble-type hop flavor is low but may be perceptible. The aroma should strike a balance between malt hop and smoke. Fruity esters diacetyl and chill haze should not be perceived.",
    count: 14,
    avgIbu: 29.5,
    avgAbv: 5.1
  },
  {
    style: "European-germanic Lager",
    subStyle: "German-Style Eisbock",
    description: "A stronger version of Doppelbock. Malt character can be very sweet. The body is very full and deep copper to almost black in color. Alcoholic strength is very high. Hop bitterness is subdued. Hop flavor and aroma are absent. Fruity esters may be evident but not overpowering. Typically these beers are brewed by freezing a Doppelbock and removing resulting ice to increase alcohol content. Diacetyl should be absent",
    count: 12,
    avgIbu: 31.8,
    avgAbv: 9.8
  },
  {
    style: "European-germanic Lager",
    subStyle: "Bamberg-Style M„rzen Rauchbier",
    description: "Bamberg-style Rauchbier M„rzen should have beechwood smoky characters that range from detectable to prevalent in the aroma and flavor. Smoke character is neither harshly phenolic nor acrid but rather very smooth almost rendering a perception of mild sweetness to this style of beer. The beer is generally toasted malty sweet and full-bodied with low to medium-low hop bitterness. Noble-type hop flavor is low but may be perceptible. The aroma should strike a balance between malt hop and smoke. Fruity esters diacetyl and chill haze should not be perceived.",
    count: 10,
    avgIbu: 20,
    avgAbv: 5.6
  },
  {
    style: "European-germanic Lager",
    subStyle: "Bamberg-Style Bock Rauchbier",
    description: "Bamberg-style Bock Rauchbier should have beech wood smoky characters that range from detectable to prevalent in the aroma and flavor. Smoke character is not harshly phenolic but rather very smooth almost rendering a perception of mild sweetness to this style of beer. The Bock beer character should manifest itself as a strong malty medium- to full-bodied with moderate hop bitterness that should increase proportionately with the starting gravity. Hop flavor should be low and hop aroma should be very low. Bocks can range in color from deep copper to dark brown. Fruity esters should be minimal. Diacetyl and chill haze should not be perceived.",
    count: 6,
    avgIbu: 32.5,
    avgAbv: 6.7
  },
  {
    style: "North American Lager",
    subStyle: "American-Style Lager",
    description: "Light in body and very light to straw in color American lagers are very clean and crisp and aggressively carbonated. Flavor components should b e subtle and complex with no one ingredient dominating the others. Malt sweetness is light to mild. Corn rice or other grain or sugar adjuncts are often used. Hop bitterness flavor and aroma are negligible to very light. Light fruity esters are acceptable. Chill haze and diacetyl should be absent.",
    count: 601,
    avgIbu: 28.1,
    avgAbv: 5.2
  },
  {
    style: "North American Lager",
    subStyle: "American-Style Premium Lager",
    description: "This style has low malt (and adjunct) sweetness is medium bodied and should contain no or a low percentage (less than 25%) of adjuncts. Color may be light straw to golden. Alcohol content and bitterness may also be greater. Hop aroma and flavor is low or negligible. Light fruity esters are acceptable. Chill haze and diacetyl should be absent. Note: Some beers marketed as \"premium\" (based on price) may not fit this definition.",
    count: 566,
    avgIbu: 28.3,
    avgAbv: 5.2
  },
  {
    style: "North American Lager",
    subStyle: "American-Style Pilsener",
    description: "This classic and unique pre-Prohibition American-style Pilsener is straw to deep gold in color. Hop bitterness flavor and aroma are medium to high and use of noble-type hops for flavor and aroma is preferred. Up to 25 percent corn and/or rice in the grist should be used. Malt flavor and aroma are medium. This is a light-medium to medium-bodied beer. Sweet corn-like dimethylsulfide (DMS) fruity esters and American hop-derived citrus flavors or aromas should not be perceived. Diacetyl is not acceptable. There should be no chill haze. Competition organizers may wish to subcategorize this style into rice and corn subcategories.",
    count: 452,
    avgIbu: 34.6,
    avgAbv: 5.4
  },
  {
    style: "North American Lager",
    subStyle: "American-Style M„rzen / Oktoberfest",
    description: "The American style of these classic German beers is distinguished by a comparatively greater degree of hop character. In general the style is characterized by a medium body and broad range of color from golden to reddish brown. Sweet maltiness should dominate over clean hop bitterness. The bitterness should not be aggressive or harsh. Malt character should be light-toasted rather than strongly caramel (though a low level of light caramel character is acceptable). Bread or biscuit-like malt character is acceptable in aroma and flavor. Hop aroma and flavor should be notable but at low to medium levels. Fruity esters should not be perceived. Diacetyl and chill haze should not be perceived.",
    count: 225,
    avgIbu: 23.5,
    avgAbv: 5.8
  },
  {
    style: "North American Lager",
    subStyle: "American-Style Light (Low Calorie) Lager",
    description: "These beers are extremely light colored light in body and high in carbonation. Calorie level should not exceed 125 per 12 ounce serving. Corn rice or other grain or sugar adjuncts are often used. Flavor is mild and hop bitterness and aroma is negligible to very low. Light fruity esters are acceptable. Chill haze and diacetyl should be absent.",
    count: 186,
    avgIbu: 16.8,
    avgAbv: 4.2
  },
  {
    style: "North American Lager",
    subStyle: "American-Style Amber Lager",
    description: "American-style amber lagers are light amber to amber or copper colored. They are medium bodied. There is a noticeable degree of caramel-type malt character in flavor and often in aroma. This is a broad category in which the hop bitterness flavor and aroma may be accentuated or may only be present at relatively low levels yet noticeable. Fruity esters diacetyl and chill haze should be absent.",
    count: 131,
    avgIbu: 26.4,
    avgAbv: 5.4
  },
  {
    style: "North American Lager",
    subStyle: "American-Style Dark Lager",
    description: "This beer's malt aroma and flavor are low but notable. Its color ranges from a very deep copper to a deep dark brown. It has a clean light body with discreet contributions from caramel and roasted malts. Non-malt adjuncts are often used and hop rates are low. Hop bitterness is clean and has a short duration of impact. Hop flavor and aroma are low. Carbonation is high. Fruity esters diacetyl and chill haze should not be perceived.",
    count: 104,
    avgIbu: 31.2,
    avgAbv: 5.6
  },
  {
    style: "North American Lager",
    subStyle: "American-Style Malt Liquor",
    description: "High in starting gravity and alcoholic strength this style is somewhat diverse. Some American malt liquors are just slightly stronger than American lagers while others approach bock strength. Some residual sweetness is perceived. Hop rates are very low contributing little bitterness and virtually no hop aroma or flavor. Perception of sweet-fruity esters and complex alcohols (though not solvent-like) are acceptable at low levels. Chill haze and diacetyl should not be perceived.",
    count: 44,
    avgIbu: 20.9,
    avgAbv: 6.7
  },
  {
    style: "North American Lager",
    subStyle: "American-Style Amber (Low Calorie) Lager",
    description: "These beers are pale golden to amber in color light to medium-light in body and high in carbonation. Calorie level should not exceed 125 per 12 ounce serving. Corn rice or other grain or sugar adjuncts may be used but all malt formulations are also made. Malt and hop flavors are mild yet evident. Hop bitterness is evident and hop aroma may be negligible to evident. Light fruity esters are acceptable. Chill haze and diacetyl should be absent.",
    count: 21,
    avgIbu: 22.3,
    avgAbv: 5.3
  },
  {
    style: "North American Lager",
    subStyle: "American-Style Low-Carbohydrate Light Lager",
    description: "These beers are extremely light straw to light amber in color light in body and high in carbonation. They should have a maximum carbohydrate level of 3.0 gm per 12 oz. (356 ml). These beers are characterized by extremely high degree of attenuation (often final gravity is less than 1.000 (0 §Plato) but with typical American-style light lager alcohol levels. Corn rice or other grain adjuncts are often used. Flavor is very light/mild and very dry. Hop flavor aroma and bitterness are negligible to very low. Very low yeasty flavors and fruity esters are acceptable in aroma and flavor. Chill haze and diacetyl should not be perceived.",
    count: 20,
    avgIbu: 16.3,
    avgAbv: 4.1
  },
  {
    style: "North American Lager",
    subStyle: "American-Style Ice Lager",
    description: "This style is slightly higher in alcohol than most other light-colored American-style lagers. Its body is low to medium and has low residual malt sweetness. It has few or no adjuncts. Color is very pale to golden. Hop bitterness is low but certainly perceptible. Hop aroma and flavor are low. Chill haze fruity esters and diacetyl should not be perceived. Typically these beers are chilled before filtration so that ice crystals (which may or may not be removed) are formed. This can contribute to a higher alcohol content (up to 0.5% more).",
    count: 3,
    avgIbu: 60,
    avgAbv: 7.3
  },
  {
    style: "International Styles",
    subStyle: "Baltic-Style Porter",
    description: "A true smooth cold-fermented and cold lagered beer brewed with lager yeast. Black to very deep ruby/garnet in color. Overall Baltic Porters have a very smooth lagered character with distinctive caramelized sugars licorice and chocolate-like character of roasted malts and dark sugars. Roasted dark malts should not contribute bitterness or astringent roast character. A low degree of smokiness from malt may be evident. Debitterized roast malts are best used for this style. Because of its alcoholic strength aroma may include gentle (low) lager fruitiness (berries grapes plums not banana; ale-like fruitiness from warm temperature fermentation is not appropriate) complex alcohols cocoa-like roast malt (and sometimes coffee-like roast barley yet not bitter). Hop aroma is very low though a hint of floral or sweet hop aroma can complement aromatics and flavor without dominance. Baltic Porters are not hop bitter dominated and expressed as low to medium-low. Baltic porters range from having medium to full body complemented with a medium-low to medium level of malty sweetness. No butterscotch-like diacetyl or sweet corn-like dimethylsulfide (DMS) should be apparent in aroma or flavor.",
    count: 158,
    avgIbu: 36.3,
    avgAbv: 7.9
  },
  {
    style: "International Styles",
    subStyle: "International-Style Pilsener",
    description: "International Pilseners are straw/golden in color and are well attenuated. This medium-bodied beer is often brewed with rice corn wheat or other grain or sugar adjuncts making up part of the mash. Hop bitterness is low to medium. Hop flavor and aroma are low. Residual malt sweetness is low--it does not predominate but may be perceived. Fruity esters and diacetyl should not be perceived. Very low levels of sweet corn-like dimethylsulfide (DMS) character if perceived are acceptable. There should be no chill haze.",
    count: 111,
    avgIbu: 31.7,
    avgAbv: 5.1
  },
  {
    style: "International Styles",
    subStyle: "Australasian Latin American or Tropical-Style Light Lager",
    description: "Australasian or Tropical light lagers are very light in color and light bodied. They have no hop flavor or aroma and hop bitterness is negligibly to moderately perceived. Sugar adjuncts are often used to lighten the body and flavor sometimes contributing to a slight apple-like-like fruity ester. Sugar corn rice and other cereal grains are used as an adjunct. Chill haze and diacetyl should be absent. Fruity esters should be very low.",
    count: 27,
    avgIbu: 38.7,
    avgAbv: 5
  },
  {
    style: "International Styles",
    subStyle: "Dry Lager",
    description: "This straw-colored lager lacks sweetness is light in body and is only mildly flavored by malt. Its alcoholic strength may contribute to the overall flavor character. Bitterness is low and carbonation is high. Chill haze fruity esters and diacetyl should be absent.",
    count: 7,
    avgIbu: 30,
    avgAbv: 4.7
  },
  {
    style: "Hybrid/mixed Beer",
    subStyle: "Specialty Beer",
    description: "These beers are brewed using unusual fermentable sugars grains and starches that contribute to alcohol content other than or in addition to malted barley. Nuts generally have some degree of fermentables thus beers brewed with nuts would appropriately be entered in this category. The distinctive characters of these special ingredients should be evident either in the aroma flavor or overall balance of the beer but not necessarily in overpowering quantities. For example maple syrup or potatoes would be considered unusual. Rice corn or wheat are not considered unusual. Special ingredients must be listed when competing. A statement by the brewer explaining the special nature of the beer ingredient(s) and achieved character is essential in order for fair assessment in competitions. If this beer is a classic style with some specialty ingredient(s) the brewer should also specify the classic style. Guidelines for competing: Spiced beers using unusual fermentables should be entered in the experimental category. Fruit beers using unusual fermentables should be entered in the fruit beer category.",
    count: 882,
    avgIbu: 35.3,
    avgAbv: 6.5
  },
  {
    style: "Hybrid/mixed Beer",
    subStyle: "Fruit Beer",
    description: "Fruit beers are any beers using fruit or fruit extracts as an adjunct in either the mash kettle primary or secondary fermentation providing obvious (ranging from subtle to intense) yet harmonious fruit qualities. Fruit qualities should not be overpowered by hop character. If a fruit (such as juniper berry) has an herbal or spice quality it is more appropriate to consider it in the herb and spice beers category. Acidic bacterial (not wild yeast) fermentation characters may be evident (but not necessary) they would contribute to acidity and enhance fruity balance. Clear or hazy beer is acceptable in appearance. A statement by the brewer explaining what fruits are used is essential in order for fair assessment in competitions. If this beer is a classic style with fruit the brewer should also specify the classic style.",
    count: 756,
    avgIbu: 19.8,
    avgAbv: 5.2
  },
  {
    style: "Hybrid/mixed Beer",
    subStyle: "Herb and Spice Beer",
    description: "Herb beers use herbs or spices (derived from roots seeds fruits vegetable flowers etc.) other than or in addition to hops to create a distinct (ranging from subtle to intense) character though individual characters of herbs and/or spices used may not always be identifiable. Under hopping often but not always allows the spice or herb to contribute to the flavor profile. Positive evaluations are significantly based on perceived balance of flavors. Note: Chili-flavored beers that emphasize heat rather than chili flavor should be entered as a \"spiced\" beer.  A statement by the brewer explaining what herbs or spices are used is essential in order for fair assessment in competitions. Specifying a style upon which the beer is based may help evaluation. If this beer is a classic style with an herb or spice the brewer should specify the classic style. If no Chocolate or Coffee category exists in a competition then chocolate and coffee beers should be entered in this category.",
    count: 740,
    avgIbu: 28,
    avgAbv: 6.6
  },
  {
    style: "Hybrid/mixed Beer",
    subStyle: "Light American Wheat Ale or Lager with Yeast",
    description: "This beer can be made using either ale or lager yeast. It can be brewed with 30 to 75 percent wheat malt and hop rates may be low to medium. Hop characters may be light to moderate in bitterness flavor and aroma. Fruity-estery aroma and flavor are typical but at low levels however phenolic clove-like characteristics should not be perceived. Color is usually straw to light amber and the body should be light to medium in character. Diacetyl should not be perceived. Because this style is served with yeast the character should portray a full yeasty mouthfeel and appear hazy to very cloudy. Chill haze is also acceptable. Yeast flavor and aroma should be low to medium but not overpowering the balance and character of malt and hops. These beers are typically served with the yeast in the bottle and are cloudy when served.",
    count: 710,
    avgIbu: 22.1,
    avgAbv: 5.3
  },
  {
    style: "Hybrid/mixed Beer",
    subStyle: "Wood- and Barrel-Aged Beer",
    description: "A wood- or barrel-aged beer is any lager ale or hybrid beer either a traditional style or a unique experimental beer that has been aged for a period of time in a wooden barrel or in contact with wood. This beer is aged with the intention of imparting the particularly unique character of the wood and/or what has previously been in the barrel. New wood character can be characterized as a complex blend of vanillin and/or other unique wood character but wood aged is not necessarily synonymous with imparting wood-flavors. Used sherry rum bourbon scotch port wine and other barrels are often used imparting complexity and uniqueness to beer. Ultimately a balance of flavor aroma and mouthfeel are sought with the marriage of new beer with wood and/or barrel flavors. Beers in this style may or may not have Brettanomyces character. Brewers when entering this category should specify type of barrel and/or wood used and any other special treatment or ingredients used. Competition managers may create style subcategories to differentiate between high alcohol and low alcohol beers and very dark and lighter colored beer as well as for fruit beers and non-fruit beers. Competitions may develop guidelines requesting brewers to specify what kind of wood (new or used oak other wood varieties) and/or barrel (whiskey port sherry wine etc.) was used in the process. The brewer may be asked to explain the special nature (wood used base beer style(s) and achieved character) of the beer.",
    count: 491,
    avgIbu: 39.6,
    avgAbv: 8.9
  },
  {
    style: "Hybrid/mixed Beer",
    subStyle: "Pumpkin Beer",
    description: "Pumpkin beers are any beers using pumpkins (Cucurbito pepo) as an adjunct in either mash kettle primary or secondary fermentation providing obvious (ranging from subtle to intense) yet harmonious qualities. Pumpkin qualities should not be overpowered by hop character. These may or may not be spiced or flavored with other things. A statement by the brewer explaining the nature of the beer is essential for fair assessment in competitions. If this beer is a classic style with pumpkin the brewer should also specify the classic style.",
    count: 383,
    avgIbu: 23.5,
    avgAbv: 6.7
  },
  {
    style: "Hybrid/mixed Beer",
    subStyle: "American-Style Cream Ale or Lager",
    description: "Mild pale light-bodied ale made using a warm fermentation (top or bottom) and cold lagering. Hop bitterness and flavor range from very low to low. Hop aroma is often absent. Sometimes referred to as cream ales these beers are crisp and refreshing. Pale malt character predominates. Caramelized malt character should be absent. A fruity or estery aroma may be perceived. Diacetyl and chill haze should not be perceived. Sulfur character and/or sweet corn-like dimethylsulfide (DMS) should be extremely low or absent from this style of beer.",
    count: 341,
    avgIbu: 18.7,
    avgAbv: 5.2
  },
  {
    style: "Hybrid/mixed Beer",
    subStyle: "Rye Ale or Lager with or without Yeast",
    description: "Rye beers can be made using either ale or lager yeast. It should be brewed with at least 20 percent rye malt and low to medium perception of hop bitterness. Hop aroma and flavor can be low to medium-high. These are often versions of classic styles that contain noticeable rye character in balance with other qualities of the beer. A spicy fruity-estery aroma and flavor are typical but at low levels; however phenolic clove-like characteristics should not be perceived. Color is straw to amber and the body should be light to medium in character. Diacetyl should not be perceived. If this style is packaged and served without yeast no yeast characters should be evident in mouthfeel flavor or aroma. A low level of tannin derived astringency may be perceived. If this style is served with yeast the character should portray a full yeasty mouthfeel and appear hazy to very cloudy. Yeast flavor and aroma should be low to medium but not overpowering the balance and character of rye and barley malt and hops. Darker versions of this style will be dark amber to dark brown and the body should be light to medium in character. Roasted malts are optionally evident in aroma and flavor with a low level of roast malt astringency acceptable when appropriately balanced with malt sweetness. Roast malts may be evident as a cocoa/chocolate or caramel character. Aromatic toffee-like caramel or biscuit-like characters may be part of the overall flavor/aroma profile. As in the lighter colored versions diacetyl should not be perceived. Competition directors may create specific styles of rye beer such as Rye Pale Ale or Rye Brown Ale. A statement by the brewer indicating if the beer is based on a classic style is essential for accurate judging.",
    count: 315,
    avgIbu: 47.1,
    avgAbv: 6.3
  },
  {
    style: "Hybrid/mixed Beer",
    subStyle: "Session Beer",
    description: "Any style of beer can be made lower in strength than described in the classic style guidelines. The goal should be to reach a balance between the style's character and the lower alcohol content. Drinkability is a character in the overall balance of these beers. Beers in this category must not exceed 4.1% alcohol by weight (5.1% alcohol by volume).",
    count: 252,
    avgIbu: 38.8,
    avgAbv: 4.5
  },
  {
    style: "Hybrid/mixed Beer",
    subStyle: "Wood- and Barrel-Aged Sour Beer",
    description: "A wood- or barrel-aged sour beer is any lager ale or hybrid beer either a traditional style or a unique experimental beer that has been aged for a period of time in a wooden barrel or in contact with wood and has developed a bacterial induced natural acidity. This beer is aged in wood with the intention of introducing the micro flora present in the wood. Sometimes wood aging is intended to impart the particularly unique character of the wood but wood-aged is not necessarily synonymous with imparting wood-flavors. Wood character can be characterized as a complex blend of vanillin and unique wood character. Wood-derived character can also be characterized by flavors of the product that was in the barrel during prior use. These wood-derived flavors if present in this style can be very low in character and barely perceived or evident or assertive as wood-derived flavors. Any degree of woodderived flavors should be in balance with other beer character. Fruit and herb/spiced versions may take on the hue flavors and aromas of added ingredients.  Usually bacteria and \"wild\" yeasts fermentation contributes complex esters and results in a dry to very dry beer. Ultimately a balance of flavor aroma and mouthfeel are sought with the marriage of acidity complex esters and new beer with wood and/or barrel flavors. Beers in this style may or may not have Brettanomyces character.  Brewers when entering this category should specify type of barrel used and any other special treatment or ingredients used. Competition managers may create style subcategories to differentiate between high alcohol and low alcohol beers and very dark and lighter colored beer as well as for fruit beers and non-fruit beers. Competitions may develop guidelines requesting brewers to specify what kind of wood (new or used oak other wood varieties). The brewer may be asked to explain the special nature (wood used base beer style(s) and achieved character) of the beer.",
    count: 222,
    avgIbu: 26.1,
    avgAbv: 7.7
  },
  {
    style: "Mead Cider & Perry",
    subStyle: "Fruit Cider",
    description: "Like a dry wine with complex flavors. The apple character must marry with the added fruit so that neither dominates the other.",
    count: 222,
    avgIbu: 28,
    avgAbv: 6.3
  },
  {
    style: "Hybrid/mixed Beer",
    subStyle: "Coffee-Flavored Beer",
    description: "Coffee beers use coffee in any of its forms other than or in addition to hops to create a distinct (ranging from subtle to intense) character. Under hopping allows coffee to contribute to the flavor profile while not becoming excessively bitter. If this beer is a classic style with coffee flavor the brewer should specify the classic style.",
    count: 206,
    avgIbu: 34.2,
    avgAbv: 6.5
  },
  {
    style: "Hybrid/mixed Beer",
    subStyle: "Light American Wheat Ale or Lager without Yeast",
    description: "This beer can be made using either ale or lager yeast. It can be brewed with 30 to 75 percent wheat malt and hop rates may be low to medium. Hop characters may be light to moderate in bitterness flavor and aroma. A fruity-estery aroma and flavor are typical but at low levels however phenolic clove-like characteristics should not be perceived. Appearance can be clear or with chill haze golden to light amber and the body should be light to medium in character. Diacetyl should not be perceived. Because this style is packaged and served without yeast no yeast characters should be evident in mouthfeel flavor or aroma.",
    count: 204,
    avgIbu: 19.4,
    avgAbv: 5.2
  },
  {
    style: "Mead Cider & Perry",
    subStyle: "Common Cider",
    description: "Variable but should be a medium refreshing drink. Sweet ciders must not be cloying. Dry ciders must not be too austere. An ideal cider serves well as a ?session? drink and suitably accompanies a wide variety of food.",
    count: 179,
    avgIbu: 10,
    avgAbv: 6.3
  },
  {
    style: "Hybrid/mixed Beer",
    subStyle: "Fruit Wheat Ale or Lager with or without Yeast",
    description: "This beer can be made using either ale or lager yeast. It can be brewed with 30 to 75 percent malted wheat. Fruit or fruit extracts contribute flavor and/or aroma. Perceived fruit qualities should be authentic and replicate true fruit complexity as much as possible. Color should reflect a degree of fruit's color. Hop rates may be low to medium. Hop characters may be light to moderate in bitterness flavor and aroma. Fruity-estery aroma and flavor from yeast can be typical but at low levels; however phenolic clovelike characteristics should not be perceived. Body should be light to medium in character. Diacetyl should not be perceived. When this style is served with yeast the character should portray a full yeasty mouthfeel and appear hazy to very cloudy. Chill haze is also acceptable. Yeast flavor and aroma should be low to medium but not overpowering the balance and character of malt and hops. Brewer may indicate on the bottle whether the yeast should be intentionally roused or if they prefer that the entry be poured as quietly as possible.",
    count: 140,
    avgIbu: 17.7,
    avgAbv: 5.4
  },
  {
    style: "Hybrid/mixed Beer",
    subStyle: "Smoke Beer (Lager or Ale)",
    description: "Any style of beer can be smoked; the goal is to reach a balance between the style's character and the smoky properties. Type of wood or other sources of smoke should be specified as well as the style the beer is based upon.",
    count: 137,
    avgIbu: 29.2,
    avgAbv: 6.4
  },
  {
    style: "Hybrid/mixed Beer",
    subStyle: "Wood- and Barrel-Aged Strong Beer",
    description: "Any strong classic style or unique experimental style of beer can be wood or barrel-aged for a period of time in a wooden barrel or in contact with wood. This beer is aged with the intention of imparting the particularly unique character of the wood and/or what has previously been in the barrel. New wood character can be characterized as a complex blend of vanillin and unique wood character but wood aged is not necessarily synonymous with imparting wood-flavors. Used sherry rum bourbon scotch port wine and other barrels are often used imparting complexity and uniqueness to beer. Ultimately a balance of flavor aroma and mouthfeel are sought with the marriage of new beer with wood and/or barrel flavors. Primary character of the beer style may or may not be apparent. Sour wood-aged beer of any color is outlined in other categories. Beers in this style may or may not have Brettanomyces character. The brewer must explain the special nature of the beer to allow for accurate judging. Comments could include: type of wood used (new or old oak or other wood type) type of barrel used (new port/ whiskey/ wine/ sherry/ other) base beer style or achieved character. Beer entries not accompanied by this information will be at a disadvantage during judging.",
    count: 127,
    avgIbu: 49.2,
    avgAbv: 10.9
  },
  {
    style: "Hybrid/mixed Beer",
    subStyle: "California Common Beer",
    description: "California Common Beer is light amber to amber in color and is medium bodied. There is a noticeable degree of caramel-type malt character in flavor and often in aroma. Hop bitterness impression is medium to medium high and is balanced with a low to medium-low degree of fruity esters and malt character and give an impression of balance and drinkability. Hop flavor and aroma is low to medium-low. California Common Beer is a style of beer brewed with lager yeasts but at ale fermentation temperatures. Diacetyl and chill haze should be absent.",
    count: 125,
    avgIbu: 32.5,
    avgAbv: 5.4
  },
  {
    style: "Hybrid/mixed Beer",
    subStyle: "Specialty Honey Lager or Ale",
    description: "These beers are brewed using honey in addition to malted barley. Beers may be brewed to a traditional style or may be experimental. Character of honey should be evident in flavor and aroma and balanced with the other components without overpowering them. A statement by the brewer explaining the classic or other style of the beer and the type of honey used is essential in order for fair assessment in competitions.",
    count: 125,
    avgIbu: 24.5,
    avgAbv: 6.2
  },
  {
    style: "Hybrid/mixed Beer",
    subStyle: "Wood- and Barrel-Aged Dark Beer",
    description: "Any classic style or unique experimental style of dark beer can be wood or barrel-aged for a period of time in a wooden barrel or in contact with wood. This beer is aged with the intention of imparting the particularly unique character of the wood and/or what has previously been in the barrel. New wood character can be characterized as a complex blend of vanillin and/or other unique wood character but wood-aged is not necessarily synonymous with imparting wood-flavors. Used sherry rum bourbon scotch port wine and other barrels are often used imparting complexity and uniqueness to beer. Ultimately a balance of flavor aroma and mouthfeel are sought with the marriage of new beer with wood and/or barrel flavors. Primary character of the beer style may or may not be apparent. Sour wood-aged beer of any color is outlined in other categories. Dark fruited or spiced beer would also be appropriately entered in this category. Beers in this style may or may not have Brettanomyces character.  The brewer should explain the special nature of the beer to allow for accurate judging. Comments could include: type of wood used (new or old oak or other wood type) type of barrel used (new port/ whiskey/ wine/ sherry/ other) base beer style or achieved character. Beer entries not accompanied by this information will be at a disadvantage during judging.",
    count: 122,
    avgIbu: 48.1,
    avgAbv: 9.5
  },
  {
    style: "Malternative Beverages",
    subStyle: "Flavored Malt Beverage",
    description: "Flavored malt beverages are brewery products that are different from traditional malt beverages like malt liquor ales and lagers in several aspects. Flavored malt beverages exhibit little or no traditional beer or malt beverage flavor characteristics. Their flavor is primarily derived from added flavoring rather than from malt and other materials used in fermentation. However  flavored malt beverages are marketed in traditional beer bottles and cans and distributed to the alcohol beverage market through beer and malt beverage wholesalers. Their alcohol content is similar to other malt beverages ?ÿin the range of 4-6% alcohol by volume.",
    count: 113,
    avgIbu: 1,
    avgAbv: 5.4
  },
  {
    style: "Mead Cider & Perry",
    subStyle: "Other Specialty Cider or Perry",
    description: "(blank)",
    count: 110,
    avgIbu: 20,
    avgAbv: 7.1
  },
  {
    style: "Hybrid/mixed Beer",
    subStyle: "Other Strong Ale or Lager",
    description: "Any style of beer can be made stronger than the classic style guidelines. The goal should be to reach a balance between the style's character and the additional alcohol. Refer to this guide when making styles stronger and appropriately identify the style created (for example: double alt triple fest or quadruple Pilsener).",
    count: 71,
    avgIbu: 41.5,
    avgAbv: 7.4
  },
  {
    style: "Hybrid/mixed Beer",
    subStyle: "Chocolate / Cocoa-Flavored Beer",
    description: "Chocolate beers use \"dark\" chocolate or cocoa in any of its forms other than or in addition to hops to create a distinct (ranging from subtle to intense) character. Under hopping allows chocolate to contribute to the flavor profile while not becoming excessively bitter. White Chocolate should not be entered into this category. If this beer is a classic style with chocolate or cocoa the brewer should specify the classic style.",
    count: 69,
    avgIbu: 28.3,
    avgAbv: 6.9
  },
  {
    style: "Mead Cider & Perry",
    subStyle: "Dry Mead",
    description: "Similar in balance body finish and flavor intensity to a dry white wine with a pleasant mixture of subtle honey character soft fruity esters and clean alcohol. Complexity harmony and balance of sensory elements are most desirable with no inconsistencies in color aroma flavor or aftertaste. The proper balance of sweetness acidity alcohol and honey character is the essential final measure of any mead.",
    count: 65,
    avgIbu: "",
    avgAbv: 12
  },
  {
    style: "Hybrid/mixed Beer",
    subStyle: "Brett Beer",
    description: "Brett Beers are any range of color and may take on the color of added fruits or other ingredients. Chill haze bacteria and yeast-induced haze are allowable at low to medium levels at any temperature. Moderate to intense yet balanced fruity-ester aromas are evident. In darker versions roasted malt caramel-like and chocolate-like aromas are subtly present. Diacetyl and DMS aromas should not be perceived. Hop aroma is evident over a full range from low to high. In darker versions roasted malt caramel-like and chocolate-like flavors are subtly present. Fruited versions will exhibit fruit flavors in harmonious balance with other characters. Hop flavor is evident over a full range from low to high. Hop bitterness is evident over a full range from low to high. The evolution of natural acidity develops balanced complexity. Horsey goaty leathery phenolic and light to moderate and/or fruity acidic character evolved from Brettanomyces organisms may be evident not dominant and in balance with other character. Cultured yeast strains may be used in the fermentation. Beers in this style should not use bacteria or exhibit bacteria-derived characters. Moderate to intense yet balanced fruity-ester flavors are evident. Diacetyl and DMS flavors should not be perceived. Wood vessels may be used during the fermentation and aging process but wood-derived flavors such as vanillin must not be present. Residual flavors that come from liquids previously aged in a barrel such as bourbon or sherry should not be present. Body is evident over a full range from low to high. For purposes of competition entries exhibiting wood-derived characters or characters of liquids previously aged in wood would more appropriately be entered in other Wood-Aged Beer categories. Wood- and barrel-aged sour ales should not be entered here and are classified elsewhere.",
    count: 63,
    avgIbu: 28.9,
    avgAbv: 6.9
  },
  {
    style: "Hybrid/mixed Beer",
    subStyle: "Non-Alcoholic (Beer) Malt Beverages",
    description: "Non-alcoholic (NA) malt beverages should emulate the character of a previously listed category/subcategory designation but without the alcohol (less than 0.5 percent). Non-alcoholic (beer) malt beverages will inherently have a profile lacking the complexity and balance of flavors which can be attributed to alcohol. They should accordingly not be assessed negatively for reasons related to the absence of alcohol.",
    count: 60,
    avgIbu: 28,
    avgAbv: 0.4
  },
  {
    style: "Mead Cider & Perry",
    subStyle: "Sweet Mead",
    description: "Similar in balance body finish and flavor intensity to a well-made dessert wine (such as Sauternes) with a pleasant mixture of honey character residual sweetness soft fruity esters and clean alcohol. Complexity harmony and balance of sensory elements are most desirable with no inconsistencies in color aroma flavor or aftertaste. The proper balance of sweetness acidity alcohol and honey character is the essential final measure of any mead.",
    count: 59,
    avgIbu: 10,
    avgAbv: 7.6
  },
  {
    style: "Hybrid/mixed Beer",
    subStyle: "Experimental Beer (Lager or Ale)",
    description: "An experimental beer is any beer (lager ale or other) that is primarily grain-based and employs unusual techniques and/or ingredients. A minimum 51% of the fermentable carbohydrates must be derived from malted grains. The overall uniqueness of the process ingredients used and creativity should be considered. Beers such as garden (vegetable) fruit chocolate coffee spice specialty or other beers that match existing categories should not be entered into this category. Beers not easily matched to existing style categories in a competition would often be entered into this category. Beers that are a combination of other categories (spice smoke specialty porter etc.) could also be entered into this category. A statement by the brewer explaining the experimental or other nature of the beer is essential in order for fair assessment in competitions. Generally a 25-word statement would suffice in explaining the experimental nature of the beer.",
    count: 58,
    avgIbu: 35.5,
    avgAbv: 6.8
  },
  {
    style: "Mead Cider & Perry",
    subStyle: "English Cider",
    description: "Generally dry full-bodied austere.",
    count: 58,
    avgIbu: 22,
    avgAbv: 6.5
  },
  {
    style: "Hybrid/mixed Beer",
    subStyle: "Wild Beer",
    description: "Wild Beers are any range of color. These beers may be clear or hazy due to yeast chill haze or hop haze. Aromas may vary tremendously due to fermentation characters contributed by various known and unknown microorganisms. The overall balance should be complex and balanced. Hop aroma very low to high. Usually because of a high degree of attenuation in these beers malt character is very low to low. If there are exceptions that are malty the overall balance of complexity of other characters should be in harmony. Hop flavor very low to high. Hop bitterness is perceived at varying levels depending on the overall balance but usually perceived as very low to low. Wild beers are \"spontaneously\" fermented with microorganisms that the brewer has introduced from the ambient air/environment in the vicinity of the brewery in which the beer is brewed. Wild beers may not be fermented with any cultured strains of yeast or bacteria. Wild beer may or may not be perceived as acidic. It may include a wildly variable spectrum of flavors and aromas derived from the wild microorganisms with which it was fermented. The overall balance of flavors aromas appearance and body is an important factor in assessing these beers. Body is very low to medium. Spontaneously fermented beers with fruit spice or other ingredients would be appropriately entered as Wild Beer. For purposes of competition entries which could be appropriately entered in an existing classic or traditional category such as Belgian-Style Lambic Gueuze Fruit Lambic etc. should be entered in that category and not entered as a Wild Beer.",
    count: 52,
    avgIbu: 22.3,
    avgAbv: 6.4
  },
  {
    style: "Hybrid/mixed Beer",
    subStyle: "German-Style Rye Ale (Roggenbier) with or without Yeast",
    description: "This beer can be made using phenol producing ale yeast. It should be brewed with at least 30 percent rye malt and hop rates will be low. A banana -like fruity-estery aroma and flavor are typical but at low levels; phenolic clove-like characteristics should also be perceived. Color is straw to dark amber and the body should be light to medium in character. Diacetyl should not be perceived. If this style is packaged and served without yeast no yeast characters should be evident in mouthfeel flavor or aroma. If the beer is served with yeast the character should portray a full yeasty mouthfeel and appear hazy to very cloudy. Yeast flavor and aroma should be low to medium but not overpowering the balance and character of rye and barley malt and hops. Darker versions of this style will be dark amber to dark brown and the body should be light to medium in character. Roasted malts are optionally evident in aroma and flavor with a low level of roast malt astringency acceptable when appropriately balanced with malt sweetness. Roast malts may be evident as a cocoa/chocolate or light caramel character. Aromatic toffee-like caramel or biscuit-like characters may be part of the overall flavor/aroma profile. As in the lighter colored versions diacetyl should not be perceived.",
    count: 47,
    avgIbu: 25.3,
    avgAbv: 5.7
  },
  {
    style: "Hybrid/mixed Beer",
    subStyle: "Gluten-Free Beer",
    description: "A beer (lager ale or other) that is made from fermentable sugars grains and converted carbohydrates. Ingredients do not contain gluten in other words zero gluten (No barley wheat spelt oats rye etc). May or may not contain malted grains that do not contain gluten. Brewers may or may not design and identify these beers along other style guidelines with regard to flavor aroma and appearance profile. The beer's overall balance and character should be based on its own merits and not necessarily compared with traditional styles of beer. In competitions brewers identify ingredients and fermentation type. NOTE: These guidelines do not supersede any government regulations. Wine mead flavored malt beverages or beverages other than beer as defined by the TTB (U.S. Trade and Tax Bureau) are not considered \"gluten-free beer\" under these guidelines.",
    count: 42,
    avgIbu: 32.9,
    avgAbv: 5.3
  },
  {
    style: "Mead Cider & Perry",
    subStyle: "Semi-Sweet Mead",
    description: "Similar in balance body finish and flavor intensity to a semisweet (or medium-dry) white wine with a pleasant mixture of honey character light sweetness soft fruity esters and clean alcohol. Complexity harmony and balance of sensory elements are most desirable with no inconsistencies in color aroma flavor or aftertaste. The proper balance of sweetness acidity alcohol and honey character is the essential final measure of any mead.",
    count: 42,
    avgIbu: "",
    avgAbv: 9.3
  },
  {
    style: "Mead Cider & Perry",
    subStyle: "Braggot",
    description: "A harmonious blend of mead and beer with the distinctive characteristics of both. A wide range of results are possible depending on the base style of beer variety of honey and overall sweetness and strength. Beer flavors tend to somewhat mask typical honey flavors found in other meads.",
    count: 32,
    avgIbu: 32.9,
    avgAbv: 8.7
  },
  {
    style: "Hybrid/mixed Beer",
    subStyle: "Dark American Wheat Ale or Lager with Yeast",
    description: "This beer can be made using either ale or lager yeast. It can be brewed with 30 to 75 percent malt wheat and hop rates may be low to medium. Fruity-estery aroma and flavor are typical but at low levels; however phenolic clove-like characteristics should not be perceived. Color is dark amber to dark brown and the body should be light to medium in character. Roasted malts are optionally evident in aroma and flavor with a low level of roast malt astringency acceptable when appropriately balanced with malt sweetness. Roast malts may be evident as a cocoa/chocolate or caramel character. Aromatic toffee-like caramel or biscuit-like characters may be part of the overall flavor/aroma profile. Diacetyl should not be perceived. Because this style is intended to be served with yeast the character should portray a full yeasty mouthfeel and appear hazy to very cloudy. Chill haze is acceptable. Yeast flavor and aroma should be low to medium but not overpowering the balance and character of malt and hops.",
    count: 31,
    avgIbu: 26.4,
    avgAbv: 5.5
  },
  {
    style: "Mead Cider & Perry",
    subStyle: "New England Cider",
    description: "Substantial body and character.",
    count: 30,
    avgIbu: "",
    avgAbv: 6.1
  },
  {
    style: "Mead Cider & Perry",
    subStyle: "Open Category Mead",
    description: "This mead should exhibit the character of all of the ingredients in varying degrees and should show a good blending or balance between the various flavor elements. Whatever ingredients are included the result should be identifiable as a honey-based fermented beverage.",
    count: 30,
    avgIbu: "",
    avgAbv: 10
  },
  {
    style: "Hybrid/mixed Beer",
    subStyle: "Wood- and Barrel-Aged Pale to Amber Beer",
    description: "Any classic style or unique experimental beer that has been aged for a period of time in a wooden barrel or in contact with wood. This beer is aged with the intention of imparting the particularly unique character of the wood and/or what has previously been in the barrel. New wood character can be characterized as a complex blend of vanillin and/or other unique wood character but wood aged is not necessarily synonymous with imparting wood-flavors. Used sherry rum bourbon scotch port wine and other barrels are often used imparting complexity and uniqueness to beer. Ultimately a balance of flavor aroma and mouthfeel are sought with the marriage of new beer with wood and/or barrel flavors. Primary character of the beer style may or may not be apparent. Sour wood-aged beer of any color is outlined in other categories. Fruited or spiced beer that is wood and barrel aged would also be appropriately entered in this category. Beers in this style may or may not have Brettanomyces character.  The brewer should explain the special nature of the beer to allow for accurate judging. Comments could include: type of wood used (new or old oak or other wood type) type of barrel used (new port/ whiskey/ wine/ sherry/ other) base beer style or achieved character. Beer entries not accompanied by this information will be at a disadvantage during judging.",
    count: 29,
    avgIbu: 39.4,
    avgAbv: 7.5
  },
  {
    style: "Hybrid/mixed Beer",
    subStyle: "Field Beer",
    description: "Field beers are any beers using vegetables as an adjunct in either the mash kettle primary or secondary fermentation providing obvious (ranging from subtle to intense) yet harmonious qualities. Vegetable qualities should not be overpowered by hop character. If a vegetable has an herbal or spice quality (such as the \"heat\" of a chili pepper) it should be classified as herb/spice beer style.  Note Chili-flavored beer with notable roast or vegetal character is evident it should be entered as Field Beer.  A statement by the brewer explaining what vegetables are used is essential in order for fair assessment in competitions. If this beer is a classic style with vegetables the brewer should also specify the classic style. Note: If no Pumpkin beer category exists in a competition then Pumpkin beers should be entered in this category.",
    count: 28,
    avgIbu: 36.5,
    avgAbv: 6
  },
  {
    style: "Hybrid/mixed Beer",
    subStyle: "Historical Beer",
    description: "Historical Beers are any range of color. Malt sweetness will vary dramatically depending on overall balance desired. Hop bitterness is very low to very high. Above all beers in this category are reflective of an established historical beer and/or brewing heritage from any period of time or part of the world that are not already a beer style already established in these guidelines. This beer commemorates combinations of unique brewing ingredients and/or techniques established in past periods. Examples of Historical Beers might include current day versions of historic styles which are not represented elsewhere in these guidelines such as Finnish-style Sahti South American Chicha Nepalese Chong/Chang African sorghum based beers and others. In evaluating these beers judges will weigh several factors such as uniqueness heritage regional distinction technical brewing skills and balance of character background story & information and overall spirit of the intent of this category. \"Historical beers\" that are not represented elsewhere as a definitive style in these guidelines could possibly be entered in such categories as Experimental Herb & Spice Field Beer etc. but by choice a brewer may categorize (and enter) their beer as Historical beer.",
    count: 28,
    avgIbu: 22.3,
    avgAbv: 5.5
  },
  {
    style: "Hybrid/mixed Beer",
    subStyle: "Aged Beer (Ale or Lager)",
    description: "Beers aged for over one year. Generally beers with high hopping rates roast malt content high alcohol content complex herbal smoke or fruit content (Wood aging Brettanomyces characters and acidic beers must be classified or entered into other categories if that option is available) A brewer may brew any type of beer of any strength and enhance its character with extended and creative aging conditions. Beers in this category may be aged in bottles or any type of food grade vessel. In competition brewers may be required to state age of beer. Competition organizer may develop guidelines in which aged beers are subcategorized by aging time vessel styles etc. Brewers should provide a statement describing the nature or style of the beer. This statement could include classic or other style special ingredients length of aging time etc.",
    count: 27,
    avgIbu: 33.6,
    avgAbv: 7.6
  },
  {
    style: "Hybrid/mixed Beer",
    subStyle: "Chili Pepper Beer",
    description: "Chili Pepper Beers are any range of color from pale to very dark depending on the underlying style. Clear or hazy beer is acceptable in appearance. Chili Beers are any beers using chili peppers as a flavor aroma or ?heat? inducing adjunct to create distinct and balanced (ranging from subtle to intense) character. Chili pepper aromas ranging from subtle to intense may or may not be evident and should not be overpowered by hop aromas. Malt sweetness can vary from very low to medium-high levels depending on the underlying beer style. Hop bitterness is very low to medium-high. Chili pepper aroma and flavor qualities should not be overpowered by hop aroma and flavor and should be present in harmony with characteristics typical of the underlying beer style. Chili pepper qualities may vary widely as vegetal spicy or \"heat\" inducing flavors and/or aromas.",
    count: 24,
    avgIbu: 28,
    avgAbv: 5.7
  },
  {
    style: "Hybrid/mixed Beer",
    subStyle: "Indigenous Beer (Lager or Ale)",
    description: "This beer style is unusual in that its impetus is to commemorate combinations of ingredients and/or techniques adopted by or unique to a particular region. At least one regional combination of ingredients and/or techniques must be unique and differentiated from ingredients and/or techniques commonly used by brewers throughout the world.  There are many excellent and popular beers that are brewed with either non-traditional or traditional ingredients and/or processes yet their character may distinctively vary from all other styles currently defined or included in these guidelines. These grain-based beers are brewed reflecting local beer culture (process ingredients climate etc.). This category recognizes uniquely local or regional beer types and beers distinctively not defined in any recognized style in these guidelines. They may be light or dark strong or weak hoppy or not hoppy. They may have characters which are unique to yeast fermentation techniques aging conditions carbonation level - or higher or lower levels of profound characters normally associated with other beer types. Examples of indigenous beers might include current day versions of highly regional and/or historic styles which are not represented elsewhere in these guidelines such as Finnish-style sahti S American chicha African sorghum based beers and others. Other examples might include beers made wholly unique by use of multiple local ingredients and/or techniques with the resulting beer being highly representative of location as well as differentiated from traditional beer style categories. Beers brewed with non-traditional hop varieties grains malt yeast or other ingredient that still closely approximate an existing classical category would be more appropriately entered into the classical category. New and innovative beers that do not represent locally adopted techniques or grown ingredients would be more appropriately entered into the experimental category. Proper evaluation of entries in this category requires the need to provide  judges with additional information about the beer.  A written summary illustrating the intent background history design and/or development of the beer as well as  describing any regional and/or stylistic context choice of ingredients process and any other unique information helps establish a basis for comparison between highly diverse entries. Entering brewers must provide a statement of 100 words or less illustrating the above and why it is an indigenous beer without revealing the company's identity. This statement should be carefully crafted and will be evaluated by judges and carry significant weight in their decisions. Statements that contain information which might identify or otherwise create bias towards the entry will be modified by the Competition Manager. Entries not accompanied by this information will be at a profound disadvantage during judging.",
    count: 22,
    avgIbu: 26.9,
    avgAbv: 5.5
  },
  {
    style: "Mead Cider & Perry",
    subStyle: "Cyser (Apple Melomel)",
    description: "In well-made examples of the style the fruit is both distinctive and well-incorporated into the honey-sweet-acid-tannin-alcohol balance of the mead. Some of the best strong examples have the taste and aroma of an aged Calvados (apple brandy from northern France) while subtle dry versions can taste similar to many fine white wines.",
    count: 18,
    avgIbu: "",
    avgAbv: 8.9
  },
  {
    style: "Hybrid/mixed Beer",
    subStyle: "Dark American Wheat Ale or Lager without Yeast",
    description: "This beer can be made using either ale or lager yeast. It can be brewed with 30 to 75 percent malted wheat and hop rates may be low to medium. A fruity-estery aroma and flavor are typical but at low levels; however phenolic clove-like characteristics should not be perceived. Color is dark amber to dark brown and the body should be light to medium in character. Roasted malts are optionally evident in aroma and flavor with a low level of roast malt astringency acceptable when appropriately balanced with malt sweetness. Roast malts may be evident as a cocoa/chocolate or caramel character. Aromatic toffee-like caramel or biscuit-like characters may be part of the overall flavor/aroma profile. Diacetyl should not be perceived. Because this style is packaged and served without yeast no yeast characters should be evident in mouthfeel flavor or aroma. Chill haze is also acceptable.",
    count: 16,
    avgIbu: 26.3,
    avgAbv: 6
  },
  {
    style: "Mead Cider & Perry",
    subStyle: "French Cider",
    description: "Medium to sweet full-bodied rich.",
    count: 15,
    avgIbu: "",
    avgAbv: 6.5
  },
  {
    style: "Other Origin",
    subStyle: "Grodziskie",
    description: "Grodziskies are straw to golden colored. Chill haze is allowable at cold temperatures. Aroma is dominated by oak smoke notes. Fruity-ester aroma can be low. Diacetyl and DMS aromas should not be perceived. Hop aroma is not perceived to very low European noble hop aroma notes. Distinctive character comes from 100% oak wood smoked wheat malt. Overall balance is a sessionably medium to medium-high assertively oak-smoky malt emphasized beer. Hop flavor is very low to low European noble hop flavor notes. Hop bitterness is medium-low to medium clean hop bitterness. Ale fermentation temperatures are managed to lend a crisp overall flavor impression. Low fruity-ester flavor may be present. Sourness diacetyl and DMS should not be perceived on the palate. Grodziskie (also known as Gr„tzer) is a Polish ale style. Historic versions were most often bottle conditioned to relatively high carbonation levels. Body is low to medium low.",
    count: 12,
    avgIbu: 19.6,
    avgAbv: 4.4
  },
  {
    style: "Malternative Beverages",
    subStyle: "Energy Enhanced Malt Beverage",
    description: "Energy enhanced malt beverages are alcoholic drinks that are supplemented with caffeine or other stimulants such as guarana ginseng or taurine.  At a minimum these beverages contain at least one percent of alcohol by volume.",
    count: 9,
    avgIbu: "",
    avgAbv: 12
  },
  {
    style: "Hybrid/mixed Beer",
    subStyle: "Belgian-style Fruit Beer",
    description: "Belgian-Style Fruit Beers are any range of color from pale to dark depending on underlying Belgian style being fruited. Clear to hazy beer is acceptable in appearance. Fruit aromas ranging from subtle to intense should be evident and should not be overpowered by hop aromas. Belgian-Style Fruit Beers are fermented with traditional Belgian- farmhouse- saison- and/or Brettanomyces-type yeast using fruit or fruit extracts as an adjunct in either the mash kettle primary or secondary fermentation providing obvious (ranging from subtle to intense) yet harmonious fruit qualities. Malt sweetness can vary from not perceived to medium-high levels. Acidic bacterial (not wild yeast) fermentation characters may be evident (but not necessary) and if present contribute to acidity and enhance fruity balance. Body is variable with style. Classifying these beers is complex with exemplary versions depending on the exhibition of fruit characters more so than the addition of fruit itself within a Belgian beer style. As an example a fruited Saison exhibiting some Brett character would be appropriately considered as Belgian Fruit Beer; whereas a fruited Brett Beer might more appropriately be considered as Brett Beer. Lambic-Style fruit beers should be entered in the Belgian-Style Fruit Lambic category. Fruited Belgian style beers brewed with additional unusual fermentables should be entered in this category. Fruit beers fermented using German British or American ale or lager yeast would be more appropriately categorized as American-Style Fruit Beer or as Fruit Wheat Beer. For purposes of competition coconut is defined as a vegetable; beers exhibiting coconut character would be appropriately entered as Field Beer.",
    count: 7,
    avgIbu: 7,
    avgAbv: 7
  },
  {
    style: "Mead Cider & Perry",
    subStyle: "Traditional Perry",
    description: "Tannic. Medium to medium-sweet. Still to lightly sparkling. Only very slight acetification is acceptable. Mousiness ropy/oily characters are serious faults.",
    count: 7,
    avgIbu: "",
    avgAbv: 5.3
  },
  {
    style: "Mead Cider & Perry",
    subStyle: "Other Fruit Melomel",
    description: "In well-made examples of the style the fruit is both distinctive and well-incorporated into the honey-sweet-acid-tannin-alcohol balance of the mead. Different types of fruit can result in widely different characteristics; allow for a variation in the final product.",
    count: 6,
    avgIbu: "",
    avgAbv: 10.6
  },
  {
    style: "Hybrid/mixed Beer",
    subStyle: "Ginjo Beer or Sake-Yeast Beer",
    description: "A beer brewed with Sake yeast or Sake (koji) enzymes. Color depends on malts used. The unique flavor and aroma of the byproducts of sake yeast and/or koji enzymes should be distinctive and harmonize with the other malt and hop characters. Sake character may best be described as having mild fruitiness and a gentle and mild yeast extract-Vitamin B character. Hop bitterness flavor and aroma should be low to medium and should harmonize with sake-like characters. High carbonation should be evident and a higher amount of alcohol may be evident. Body and mouth feel will vary depending on base style and original gravity. A slight chill haze is permissible. A very low amount of diacetyl may be perceived.",
    count: 5,
    avgIbu: 23.5,
    avgAbv: 9
  },
  {
    style: "Mead Cider & Perry",
    subStyle: "Common Perry",
    description: "Mild. Medium to medium-sweet. Still to lightly sparkling. Only very slight acetification is acceptable. Mousiness ropy/oily characters are serious faults.",
    count: 4,
    avgIbu: "",
    avgAbv: 5.4
  },
  {
    style: "Mead Cider & Perry",
    subStyle: "Apple Wine",
    description: "Like a dry white wine balanced and with low astringency and bitterness.",
    count: 1,
    avgIbu: "",
    avgAbv: 10
  },
  {
    style: "Mead Cider & Perry",
    subStyle: "Metheglin",
    description: "In well-made examples of the style the herbs/spices are both distinctive and well-incorporated into the honey-sweet-acid-tannin-alcohol balance of the mead. Different types of herbs/spices can result in widely different characteristics; allow for a variation in the final product.",
    count: 1,
    avgIbu: "",
    avgAbv: 14
  },
  {
    style: "Mead Cider & Perry",
    subStyle: "Pyment (Grape Melomel)",
    description: "In well-made examples of the style the grape is both distinctively vinous and well-incorporated into the honey-sweet-acid-tannin-alcohol balance of the mead. White and red versions can be quite different and the overall impression should be characteristic of the type of grapes used and suggestive of a similar variety wine.",
    count: 1,
    avgIbu: "",
    avgAbv: 12
  },
  {
    style: "Other Origin",
    subStyle: "Dutch-Style Kuit Kuyt or Koyt",
    description: "Dutch-Style Kuit Kuyt or Koyts are gold to copper colored ale. Chill haze and other haze is allowable. The overall aroma character of this beer is grain emphasized with a grainy-bready accent. Hop aroma is very low to low from noble hops or other traditional European varieties. The distinctive character comes from use of minimum 45% oat malt minimum 20% wheat malt and the remainder pale malt. Hop flavor is very low to low from noble or other traditional European varieties. Hop bitterness is medium-low to medium in perceived intensity. Esters may be present at low levels. Very low levels of diacetyl are acceptable. Acidity and sweet corn-like DMS (dimethylsulfide) should not be perceived. This style of beer was popular in the Netherlands from 1400-1550. Body is low to medium.",
    count: 1,
    avgIbu: 35,
    avgAbv: 6.2
  }
];



function drawGraph(styleSelection) {

   beers.forEach(function(d) {

         if (d.avgIbu == ""){
          d.avgIbu = 0;
         }
         d.avgIbu = parseFloat(d.avgIbu);

         if (d.count == ""){
          d.count = 0;
         }
         d.count = parseFloat(d.count);
        
        if (d.avgAbv == ""){
          d.avgAbv = 0;
         }
         d.avgAbv = parseFloat(d.avgAbv);
    });


      var margin1 = {top1: 100, right1: 20, bottom1: 20, left1: 20},
      width1 = 800 - margin1.left1 - margin1.right1,
      height1 = 230 - margin1.top1 - margin1.bottom1;

      var svg1 = d3.select("#graphHolder").append("svg")
      .attr("width", width1 + margin1.left1 + margin1.right1)
      .attr("height", height1 + margin1.top1 + margin1.bottom1)
      .append("g")
      .attr("transform", "translate(" + margin1.left1 + "," + margin1.top1 + ")");
  
      var x1 = d3.scale.linear()
      .domain([0, 15])
      .range([0, width1])

      // find min, max, avg, ...
      // d3.max(beers, function(beer) {
      //   return beer.avgIbu;  
      // }) 

      var r1 = d3.scale.sqrt()
      .domain([0, 4346])
      .range([0,100])


      var xAxis1 = d3.svg.axis()
      .scale(x1)
      .ticks(13)
      .orient("bottom");

      svg1.append("g")
      .attr("class", "x axis")
      .attr("transform", "translate(0," + height1 + ")")
      .call(xAxis1)
      .append("text")
      .attr("class", "label")
      .attr("x", width1)
      .style("text-anchor", "end")
      .style("font-size", "1vw")
      .text("Alcohol By Volume (ABV)");

       svg1.selectAll(".dot")
      .data(beers)
      .enter().append("circle")
      .attr("class", "dot")
      .filter(function(d) { return d.style == styleSelection })
      .attr("r", function(d) { return r1(d.count); })
      .style("fill","#556B2F")
      .style("opacity","0.5")
      .attr("cx", function(d) { return x1(d.avgAbv); })

      //SECOND GRAPH for IBU

      var margin2 = {top2: 110, right2: 20, bottom2: 20, left2: 20},
      width2 = 800 - margin2.left2 - margin2.right2,
      height2 = 240 - margin2.top2 - margin2.bottom2;

      var svg2 = d3.select("#graphHolder").append("svg")
      .attr("width", width2 + margin2.left2 + margin2.right2)
      .attr("height", height2 + margin2.top2 + margin2.bottom2)
      .append("g")
      .attr("transform", "translate(" + margin2.left2 + "," + margin2.top2 + ")");
  
      var x2 = d3.scale.linear()
      .domain([0, 100])
      .range([0, width2])

      // find min, max, avg, ...
      // d3.max(beers, function(beer) {
      //   return beer.avgIbu;  
      // }) 

      var r2 = d3.scale.sqrt()
      .domain([0, 4346])
      .range([0,100])


      var xAxis2 = d3.svg.axis()
      .scale(x2)
      .ticks(8)
      .orient("bottom");

      svg2.append("g")
      .attr("class", "x axis")
      .attr("transform", "translate(0," + height2 + ")")
      .call(xAxis2)
      .append("text")
      .attr("class", "label")
      .attr("x", width2)
      .style("text-anchor", "end")
      .style("font-size", "1vw")
      .text("International Bitterness Unit (IBU)");

       svg2.selectAll(".dot")
      .data(beers)
      .enter().append("circle")
      .attr("class", "dot")
      .filter(function(d) { return d.style == styleSelection })
      .attr("r", function(d) { return r2(d.count); })
      .style("fill","#5D478B")
      .style("opacity","0.5")
      .attr("cx", function(d) { return x2(d.avgIbu); })

      //List of the Beers

      var subStylesList = d3.select('#listHolder').append('ol')
      .text("Hover over the Substyles (# of beers):")
      .style("font-size", "1vw")
      .style("font-family", "'Muli', sans-serif")
      .style("font-style", "italic");

      subStylesList.selectAll('li')
      .data(beers)
      .enter()
      .append('li')
      .filter(function(d) { return d.style == styleSelection; })
      .text(function(d) { return d.subStyle + " (" + d.count + ")";})           
      .style("font-style", "normal");
      

      subStylesList.selectAll('li')
      .on("mouseenter", function() {

        $('h5').hide();
        $('#button1').hide();
        $('#button2').hide();
        $('#button3').hide();
        $('#button4').hide();
        $('#button5').hide();
        $('#button6').hide();
        $('#button7').hide();
        $('#button8').hide();
        $('#button9').hide();
        $('#button10').hide();
        $('#button11').hide();
        $('#button12').hide();

        d3.selection.prototype.moveToFront = function() {  
        return this.each(function(){
        this.parentNode.appendChild(this);
         });
         }

        d3.select(this)  
            .style("color", "#800000")
            .style("font-size", "1.5vw")
         
        var selectedSubStyle = d3.select(this).data();
        selectedSubStyleNow = selectedSubStyle[0]["subStyle"]
        descriptionSubStyle = selectedSubStyle[0]["description"]
        svg1.selectAll(".dot")
        .filter(function(d) { return d.subStyle == selectedSubStyleNow; })
        .moveToFront()
        .style("fill", "#800000")
        .style("opacity", "1")
        svg2.selectAll(".dot")
        .filter(function(d) { return d.subStyle == selectedSubStyleNow; })
        .moveToFront()
        .style("fill", "#800000")
        .style("opacity", "1")
        d3.select("#description")
        .text(descriptionSubStyle);
      })


      .on("mouseout", function() {

        $('h5').show();
        $('#button1').show();
        $('#button2').show();
        $('#button3').show();
        $('#button4').show();
        $('#button5').show();
        $('#button6').show();
        $('#button7').show();
        $('#button8').show();
        $('#button9').show();
        $('#button10').show();
        $('#button11').show();
        $('#button12').show();

        d3.select(this)  
            .style("color", "black")
            .style("font-size", "1vw")
         
         var selectedSubStyle = d3.select(this).data();
         selectedSubStyleNow = selectedSubStyle[0]["subStyle"]
         svg1.selectAll(".dot")
        .filter(function(d) { return d.subStyle == selectedSubStyleNow; })
        .style("fill","#556B2F")
        .style("opacity","0.5")
         svg2.selectAll(".dot")
        .filter(function(d) { return d.subStyle == selectedSubStyleNow; })
        .style("fill","#5D478B")
        .style("opacity","0.5")
        d3.select("#description")
        .text("");
      });


      subStylesList.selectAll('li')
      .filter(function(d) { return d.style !== styleSelection; })
      .remove();

};

