this.WP_Optimize_Handlebars=this.WP_Optimize_Handlebars||{},this.WP_Optimize_Handlebars.action=this.WP_Optimize_Handlebars.action||{},this.WP_Optimize_Handlebars.action.handlebars=Handlebars.template({1:function(e,l,a,n,t){return'    <span class="wpo_edit_event"><span class="dashicons dashicons-edit"></span></span>\n'},compiler:[8,">= 4.3.0"],main:function(e,l,a,n,t){var s,i,u=(e.propertyIsEnumerable,null!=l?l:e.nullContext||{}),o=e.escapeExpression;return'<div class="wpo_event_actions">\n'+(null!=(s=a["if"].call(u,null!=l?l.stored:l,{name:"if",hash:{},fn:e.program(1,t,0),inverse:e.noop,data:t}))?s:"")+'    <span class="wpo_remove_event" data-count="'+o((i=null!=(i=a.count||(null!=l?l.count:l))?i:e.hooks.helperMissing,"function"==typeof i?i.call(u,{name:"count",hash:{},data:t}):i))+'"><span class="dashicons dashicons-no-alt" title="'+o(e.lambda(null!=(s=null!=l?l.wpoptimize:l)?s.remove_task:s,l))+'"></span></span>\n</div>\n'},useData:!0}),this.WP_Optimize_Handlebars=this.WP_Optimize_Handlebars||{},this.WP_Optimize_Handlebars.daily=this.WP_Optimize_Handlebars.daily||{},this.WP_Optimize_Handlebars.daily.handlebars=Handlebars.template({compiler:[8,">= 4.3.0"],main:function(e,l,a,n,t){var s,i=(e.propertyIsEnumerable,e.lambda),u=e.escapeExpression;return"<label>"+u(i(null!=(s=null!=l?l.details:l)?s.time:s,l))+'\n<input type="time" class="'+u(i(null!=(s=null!=l?l.details:l)?s.class_name:s,l))+'" name="wp-optimize-auto['+u(i(null!=(s=null!=l?l.details:l)?s.count:s,l))+'][time]" value="'+u(i(null!=(s=null!=l?l.details:l)?s.time_value:s,l))+'">\n</label>'},useData:!0}),this.WP_Optimize_Handlebars=this.WP_Optimize_Handlebars||{},this.WP_Optimize_Handlebars.fortnightly=this.WP_Optimize_Handlebars.fortnightly||{},this.WP_Optimize_Handlebars.fortnightly.handlebars=Handlebars.template({1:function(e,l,a,n,t){var s,i=(e.propertyIsEnumerable,e.escapeExpression);return'    <option value="'+i((s=null!=(s=a.key||t&&t.key)?s:e.hooks.helperMissing,"function"==typeof s?s.call(null!=l?l:e.nullContext||{},{name:"key",hash:{},data:t}):s))+'">'+i(e.lambda(l,l))+"</option>\n"},compiler:[8,">= 4.3.0"],main:function(e,l,a,n,t){var s,i=(e.propertyIsEnumerable,e.lambda),u=e.escapeExpression,o=null!=l?l:e.nullContext||{};return"<label>"+u(i(null!=(s=null!=l?l.details:l)?s.time:s,l))+'\n<input type="time" class="'+u(i(null!=(s=null!=l?l.details:l)?s.class_name:s,l))+'" name="wp-optimize-auto['+u(i(null!=(s=null!=l?l.details:l)?s.count:s,l))+'][time]" value="'+u(i(null!=(s=null!=l?l.details:l)?s.time_value:s,l))+'">\n</label>\n<select class="wpo_week_number" name="wp-optimize-auto['+u(i(null!=(s=null!=l?l.details:l)?s.count:s,l))+'][week]">\n'+(null!=(s=a.each.call(o,null!=(s=null!=l?l.details:l)?s.week:s,{name:"each",hash:{},fn:e.program(1,t,0),inverse:e.noop,data:t}))?s:"")+'</select>\n<select class="wpo_week_days" name="wp-optimize-auto['+u(i(null!=(s=null!=l?l.details:l)?s.count:s,l))+'][day]">\n'+(null!=(s=a.each.call(o,null!=(s=null!=l?l.details:l)?s.week_days:s,{name:"each",hash:{},fn:e.program(1,t,0),inverse:e.noop,data:t}))?s:"")+"</select>"},useData:!0}),this.WP_Optimize_Handlebars=this.WP_Optimize_Handlebars||{},this.WP_Optimize_Handlebars.monthly=this.WP_Optimize_Handlebars.monthly||{},this.WP_Optimize_Handlebars.monthly.handlebars=Handlebars.template({1:function(e,l,a,n,t){var s,i=(e.propertyIsEnumerable,e.escapeExpression);return'    <option value="'+i((s=null!=(s=a.key||t&&t.key)?s:e.hooks.helperMissing,"function"==typeof s?s.call(null!=l?l:e.nullContext||{},{name:"key",hash:{},data:t}):s))+'">'+i(e.lambda(l,l))+"</option>\n"},compiler:[8,">= 4.3.0"],main:function(e,l,a,n,t){var s,i=(e.propertyIsEnumerable,e.lambda),u=e.escapeExpression;return"<label>"+u(i(null!=(s=null!=l?l.details:l)?s.time:s,l))+'\n<input type="time" class="'+u(i(null!=(s=null!=l?l.details:l)?s.class_name:s,l))+'" name="wp-optimize-auto['+u(i(null!=(s=null!=l?l.details:l)?s.count:s,l))+'][time]" value="'+u(i(null!=(s=null!=l?l.details:l)?s.time_value:s,l))+'">\n</label>\n<label>'+u(i(null!=(s=null!=l?l.details:l)?s.day_number:s,l))+'</label>\n<select class="wpo_day_number" name="wp-optimize-auto['+u(i(null!=(s=null!=l?l.details:l)?s.count:s,l))+'][day_number]">\n'+(null!=(s=a.each.call(null!=l?l:e.nullContext||{},null!=(s=null!=l?l.details:l)?s.days:s,{name:"each",hash:{},fn:e.program(1,t,0),inverse:e.noop,data:t}))?s:"")+"</select>"},useData:!0}),this.WP_Optimize_Handlebars=this.WP_Optimize_Handlebars||{},this.WP_Optimize_Handlebars.once=this.WP_Optimize_Handlebars.once||{},this.WP_Optimize_Handlebars.once.handlebars=Handlebars.template({compiler:[8,">= 4.3.0"],main:function(e,l,a,n,t){var s,i=(e.propertyIsEnumerable,e.lambda),u=e.escapeExpression;return"<label>"+u(i(null!=(s=null!=l?l.details:l)?s.date:s,l))+'\n<input type="date" class="'+u(i(null!=(s=null!=l?l.details:l)?s.class_name:s,l))+'" name="wp-optimize-auto['+u(i(null!=(s=null!=l?l.details:l)?s.count:s,l))+'][date]" value="'+u(i(null!=(s=null!=l?l.details:l)?s.date_value:s,l))+'" min="'+u(i(null!=(s=null!=l?l.details:l)?s.today:s,l))+'">\n</label>\n<label>'+u(i(null!=(s=null!=l?l.details:l)?s.time:s,l))+'\n<input type="time" class="'+u(i(null!=(s=null!=l?l.details:l)?s.class_name:s,l))+'" name="wp-optimize-auto['+u(i(null!=(s=null!=l?l.details:l)?s.count:s,l))+'][time]" value="'+u(i(null!=(s=null!=l?l.details:l)?s.time_value:s,l))+'">\n</label>'},useData:!0}),this.WP_Optimize_Handlebars=this.WP_Optimize_Handlebars||{},this.WP_Optimize_Handlebars.optimizations=this.WP_Optimize_Handlebars.optimizations||{},this.WP_Optimize_Handlebars.optimizations.handlebars=Handlebars.template({1:function(e,l,a,n,t){var s,i=(e.propertyIsEnumerable,null!=l?l:e.nullContext||{}),u=e.hooks.helperMissing,o="function",p=e.escapeExpression;return'    <option value="'+p((s=null!=(s=a.id||(null!=l?l.id:l))?s:u,typeof s===o?s.call(i,{name:"id",hash:{},data:t}):s))+'" '+p((s=null!=(s=a.selected||(null!=l?l.selected:l))?s:u,typeof s===o?s.call(i,{name:"selected",hash:{},data:t}):s))+">"+p((s=null!=(s=a.optimization||(null!=l?l.optimization:l))?s:u,typeof s===o?s.call(i,{name:"optimization",hash:{},data:t}):s))+"</option>\n"},compiler:[8,">= 4.3.0"],main:function(e,l,a,n,t){var s,i,u=(e.propertyIsEnumerable,null!=l?l:e.nullContext||{});return'<select class="wpo_auto_optimizations" name="wp-optimize-auto['+e.escapeExpression((i=null!=(i=a.count||(null!=l?l.count:l))?i:e.hooks.helperMissing,"function"==typeof i?i.call(u,{name:"count",hash:{},data:t}):i))+'][optimization][]" multiple="multiple">\n'+(null!=(s=a.each.call(u,null!=l?l.optimizations:l,{name:"each",hash:{},fn:e.program(1,t,0),inverse:e.noop,data:t}))?s:"")+"</select>"},useData:!0}),this.WP_Optimize_Handlebars=this.WP_Optimize_Handlebars||{},this.WP_Optimize_Handlebars.schedule_types=this.WP_Optimize_Handlebars.schedule_types||{},this.WP_Optimize_Handlebars.schedule_types.handlebars=Handlebars.template({1:function(e,l,a,n,t){var s,i=(e.propertyIsEnumerable,null!=l?l:e.nullContext||{}),u=e.hooks.helperMissing,o="function",p=e.escapeExpression;return'    <option value="'+p((s=null!=(s=a.key||t&&t.key)?s:u,typeof s===o?s.call(i,{name:"key",hash:{},data:t}):s))+'" '+p((s=null!=(s=a.selected||(null!=l?l.selected:l))?s:u,typeof s===o?s.call(i,{name:"selected",hash:{},data:t}):s))+">"+p(e.lambda(l,l))+"</option>\n"},compiler:[8,">= 4.3.0"],main:function(e,l,a,n,t){var s,i,u=(e.propertyIsEnumerable,null!=l?l:e.nullContext||{});return'<select class="wpo_schedule_type" name="wp-optimize-auto['+e.escapeExpression((i=null!=(i=a.count||(null!=l?l.count:l))?i:e.hooks.helperMissing,"function"==typeof i?i.call(u,{name:"count",hash:{},data:t}):i))+'][schedule_type]">\n'+(null!=(s=a.each.call(u,null!=l?l.schedule_types:l,{name:"each",hash:{},fn:e.program(1,t,0),inverse:e.noop,data:t}))?s:"")+'</select>\n<div class="wpo_schedule_fields"></div>'},useData:!0}),this.WP_Optimize_Handlebars=this.WP_Optimize_Handlebars||{},this.WP_Optimize_Handlebars.status=this.WP_Optimize_Handlebars.status||{},this.WP_Optimize_Handlebars.status.handlebars=Handlebars.template({compiler:[8,">= 4.3.0"],main:function(e,l,a,n,t){var s,i=(e.propertyIsEnumerable,e.lambda),u=e.escapeExpression;return'<div class="wpo_event_status">\n    <label><input type="checkbox" name="wp-optimize-auto['+u(i(null!=(s=null!=l?l.details:l)?s.count:s,l))+'][status]" value="1" '+u(i(null!=(s=null!=l?l.details:l)?s.status_value:s,l))+">"+u(i(null!=(s=null!=l?l.details:l)?s.status:s,l))+"</label>\n</div>"},useData:!0}),this.WP_Optimize_Handlebars=this.WP_Optimize_Handlebars||{},this.WP_Optimize_Handlebars.weekly=this.WP_Optimize_Handlebars.weekly||{},this.WP_Optimize_Handlebars.weekly.handlebars=Handlebars.template({1:function(e,l,a,n,t){var s,i=(e.propertyIsEnumerable,e.escapeExpression);return'    <option value="'+i((s=null!=(s=a.key||t&&t.key)?s:e.hooks.helperMissing,"function"==typeof s?s.call(null!=l?l:e.nullContext||{},{name:"key",hash:{},data:t}):s))+'">'+i(e.lambda(l,l))+"</option>\n"},compiler:[8,">= 4.3.0"],main:function(e,l,a,n,t){var s,i=(e.propertyIsEnumerable,e.lambda),u=e.escapeExpression;return"<label>"+u(i(null!=(s=null!=l?l.details:l)?s.time:s,l))+'\n<input type="time" class="'+u(i(null!=(s=null!=l?l.details:l)?s.class_name:s,l))+'" name="wp-optimize-auto['+u(i(null!=(s=null!=l?l.details:l)?s.count:s,l))+'][time]" value="'+u(i(null!=(s=null!=l?l.details:l)?s.time_value:s,l))+'">\n</label>\n<select class="wpo_week_days" name="wp-optimize-auto['+u(i(null!=(s=null!=l?l.details:l)?s.count:s,l))+'][day]">\n'+(null!=(s=a.each.call(null!=l?l:e.nullContext||{},null!=(s=null!=l?l.details:l)?s.week_days:s,{name:"each",hash:{},fn:e.program(1,t,0),inverse:e.noop,data:t}))?s:"")+"</select>"},useData:!0});