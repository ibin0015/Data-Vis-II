// vg_1 — Favourite coffee types (donut/pie chart)
var vg_1 = "Favourite_coffee.vg.json";
vegaEmbed("#pie_favourite_coffee", vg_1, { actions: false })
  .catch(console.error);

// vg_2 — Global coffee consumption choropleth map
var vg_2 = "Coffee_consumption.vg.json";
vegaEmbed("#map_world_consumption", vg_2, { actions: false })
  .catch(console.error);

// vg_3 — Top 10 coffee bean exporters (bar chart)
var vg_3 = "Top_exporter.vg.json";
vegaEmbed("#bar_top_exporters", vg_3, { actions: false })
  .catch(console.error);

// vg_4 — Coffee bean preference: Arabica vs Robusta (lollipop chart)
var vg_4 = "Coffee_bean_preference.vg.json";
vegaEmbed("#lollipop_bean_preference", vg_4, { actions: false })
  .catch(console.error);

// vg_5 — Australia coffee imports flow map
var vg_5 = "aus_coffee_imports_flow.vg.json";
vegaEmbed("#map_aus_imports_flow", vg_5, { actions: false })
  .catch(console.error);

// vg_6 — Australia café dot density map
var vg_6 = "au_cafe_dotmap.vg.json";
vegaEmbed("#map_aus_cafe_dots", vg_6, { actions: false })
  .catch(console.error);

// vg_7 — Coffee search popularity over time
var vg_7 = "Search_popularity.vg.json";
vegaEmbed("#line_search_popularity", vg_7, { actions: false })
  .catch(console.error);

// vg_8 — Caffeine intake by age group (bubble chart)
var vg_8 = "caffeine_bubble_chart.vg.json";
vegaEmbed("#bubble_caffeine_by_age", vg_8, { actions: false })
  .catch(console.error);

// vg_9 — Annual coffee price in AUD (bar + trend line)
var vg_9 = "coffee_price_aud.vg.json";
vegaEmbed("#bar_coffee_price_aud", vg_9, { actions: false })
  .catch(console.error);

// vg_10 — Flat white price by city (dot strip chart)
var vg_10 = "flat_white_city_chart.vg.json";
vegaEmbed("#strip_flatwhite_by_city", vg_10, { actions: false })
  .catch(console.error);

// vg_11 — Flat white price by state vs national average (diverging bar)
var vg_11 = "flat_white_state_diverge.vg.json";
vegaEmbed("#bar_flatwhite_state_diverge", vg_11, { actions: false })
  .catch(console.error);