"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var ItemService = (function () {
    function ItemService() {
        this.items = [
            { id: 1, name: "Ter Stegen", role: "Goalkeeper" },
            { id: 3, name: "Piqué", role: "Defender" },
            { id: 4, name: "I. Rakitic", role: "Midfielder" },
            { id: 5, name: "Sergio", role: "Midfielder" },
            { id: 6, name: "Denis Suárez", role: "Midfielder" },
            { id: 7, name: "Arda", role: "Midfielder" },
            { id: 8, name: "A. Iniesta", role: "Midfielder" },
            { id: 9, name: "Suárez", role: "Forward" },
            { id: 10, name: "Messi", role: "Forward" },
            { id: 11, name: "Neymar", role: "Forward" },
            { id: 12, name: "Rafinha", role: "Midfielder" },
            { id: 13, name: "Cillessen", role: "Goalkeeper" },
            { id: 14, name: "Mascherano", role: "Defender" },
            { id: 17, name: "Paco Alcácer", role: "Forward" },
            { id: 18, name: "Jordi Alba", role: "Defender" },
            { id: 19, name: "Digne", role: "Defender" },
            { id: 20, name: "Sergi Roberto", role: "Midfielder" },
            { id: 21, name: "André Gomes", role: "Midfielder" },
            { id: 22, name: "Aleix Vidal", role: "Midfielder" },
            { id: 23, name: "Umtiti", role: "Defender" },
            { id: 24, name: "Mathieu", role: "Defender" },
            { id: 25, name: "Masip", role: "Goalkeeper" },
        ];
    }
    ItemService.prototype.getItems = function () {
        return this.items;
    };
    ItemService.prototype.getItem = function (id) {
        return this.items.filter(function (item) { return item.id === id; })[0];
    };
    ItemService = __decorate([
        core_1.Injectable()
    ], ItemService);
    return ItemService;
}());
exports.ItemService = ItemService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaXRlbS5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiaXRlbS5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQTJDO0FBSzNDO0lBREE7UUFFWSxVQUFLLEdBQVc7WUFDcEIsRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUFFLElBQUksRUFBRSxZQUFZLEVBQUUsSUFBSSxFQUFFLFlBQVksRUFBRTtZQUNqRCxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQUUsSUFBSSxFQUFFLE9BQU8sRUFBRSxJQUFJLEVBQUUsVUFBVSxFQUFFO1lBQzFDLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFBRSxJQUFJLEVBQUUsWUFBWSxFQUFFLElBQUksRUFBRSxZQUFZLEVBQUU7WUFDakQsRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUFFLElBQUksRUFBRSxRQUFRLEVBQUUsSUFBSSxFQUFFLFlBQVksRUFBRTtZQUM3QyxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQUUsSUFBSSxFQUFFLGNBQWMsRUFBRSxJQUFJLEVBQUUsWUFBWSxFQUFFO1lBQ25ELEVBQUUsRUFBRSxFQUFFLENBQUMsRUFBRSxJQUFJLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRSxZQUFZLEVBQUU7WUFDM0MsRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUFFLElBQUksRUFBRSxZQUFZLEVBQUUsSUFBSSxFQUFFLFlBQVksRUFBRTtZQUNqRCxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQUUsSUFBSSxFQUFFLFFBQVEsRUFBRSxJQUFJLEVBQUUsU0FBUyxFQUFFO1lBQzFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxJQUFJLEVBQUUsT0FBTyxFQUFFLElBQUksRUFBRSxTQUFTLEVBQUU7WUFDMUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLElBQUksRUFBRSxRQUFRLEVBQUUsSUFBSSxFQUFFLFNBQVMsRUFBRTtZQUMzQyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsSUFBSSxFQUFFLFNBQVMsRUFBRSxJQUFJLEVBQUUsWUFBWSxFQUFFO1lBQy9DLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxJQUFJLEVBQUUsV0FBVyxFQUFFLElBQUksRUFBRSxZQUFZLEVBQUU7WUFDakQsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLElBQUksRUFBRSxZQUFZLEVBQUUsSUFBSSxFQUFFLFVBQVUsRUFBRTtZQUNoRCxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsSUFBSSxFQUFFLGNBQWMsRUFBRSxJQUFJLEVBQUUsU0FBUyxFQUFFO1lBQ2pELEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxJQUFJLEVBQUUsWUFBWSxFQUFFLElBQUksRUFBRSxVQUFVLEVBQUU7WUFDaEQsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLElBQUksRUFBRSxPQUFPLEVBQUUsSUFBSSxFQUFFLFVBQVUsRUFBRTtZQUMzQyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsSUFBSSxFQUFFLGVBQWUsRUFBRSxJQUFJLEVBQUUsWUFBWSxFQUFFO1lBQ3JELEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxJQUFJLEVBQUUsYUFBYSxFQUFFLElBQUksRUFBRSxZQUFZLEVBQUU7WUFDbkQsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLElBQUksRUFBRSxhQUFhLEVBQUUsSUFBSSxFQUFFLFlBQVksRUFBRTtZQUNuRCxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsSUFBSSxFQUFFLFFBQVEsRUFBRSxJQUFJLEVBQUUsVUFBVSxFQUFFO1lBQzVDLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxJQUFJLEVBQUUsU0FBUyxFQUFFLElBQUksRUFBRSxVQUFVLEVBQUU7WUFDN0MsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLElBQUksRUFBRSxPQUFPLEVBQUUsSUFBSSxFQUFFLFlBQVksRUFBRTtTQUNoRCxDQUFDO0lBU04sQ0FBQztJQVBHLDhCQUFRLEdBQVI7UUFDSSxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQztJQUN0QixDQUFDO0lBRUQsNkJBQU8sR0FBUCxVQUFRLEVBQVU7UUFDZCxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsVUFBQSxJQUFJLElBQUksT0FBQSxJQUFJLENBQUMsRUFBRSxLQUFLLEVBQUUsRUFBZCxDQUFjLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUN4RCxDQUFDO0lBaENRLFdBQVc7UUFEdkIsaUJBQVUsRUFBRTtPQUNBLFdBQVcsQ0FpQ3ZCO0lBQUQsa0JBQUM7Q0FBQSxBQWpDRCxJQWlDQztBQWpDWSxrQ0FBVyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuXG5pbXBvcnQgeyBJdGVtIH0gZnJvbSBcIi4vaXRlbVwiO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgSXRlbVNlcnZpY2Uge1xuICAgIHByaXZhdGUgaXRlbXM6IEl0ZW1bXSA9IFtcbiAgICAgICAgeyBpZDogMSwgbmFtZTogXCJUZXIgU3RlZ2VuXCIsIHJvbGU6IFwiR29hbGtlZXBlclwiIH0sXG4gICAgICAgIHsgaWQ6IDMsIG5hbWU6IFwiUGlxdcOpXCIsIHJvbGU6IFwiRGVmZW5kZXJcIiB9LFxuICAgICAgICB7IGlkOiA0LCBuYW1lOiBcIkkuIFJha2l0aWNcIiwgcm9sZTogXCJNaWRmaWVsZGVyXCIgfSxcbiAgICAgICAgeyBpZDogNSwgbmFtZTogXCJTZXJnaW9cIiwgcm9sZTogXCJNaWRmaWVsZGVyXCIgfSxcbiAgICAgICAgeyBpZDogNiwgbmFtZTogXCJEZW5pcyBTdcOhcmV6XCIsIHJvbGU6IFwiTWlkZmllbGRlclwiIH0sXG4gICAgICAgIHsgaWQ6IDcsIG5hbWU6IFwiQXJkYVwiLCByb2xlOiBcIk1pZGZpZWxkZXJcIiB9LFxuICAgICAgICB7IGlkOiA4LCBuYW1lOiBcIkEuIEluaWVzdGFcIiwgcm9sZTogXCJNaWRmaWVsZGVyXCIgfSxcbiAgICAgICAgeyBpZDogOSwgbmFtZTogXCJTdcOhcmV6XCIsIHJvbGU6IFwiRm9yd2FyZFwiIH0sXG4gICAgICAgIHsgaWQ6IDEwLCBuYW1lOiBcIk1lc3NpXCIsIHJvbGU6IFwiRm9yd2FyZFwiIH0sXG4gICAgICAgIHsgaWQ6IDExLCBuYW1lOiBcIk5leW1hclwiLCByb2xlOiBcIkZvcndhcmRcIiB9LFxuICAgICAgICB7IGlkOiAxMiwgbmFtZTogXCJSYWZpbmhhXCIsIHJvbGU6IFwiTWlkZmllbGRlclwiIH0sXG4gICAgICAgIHsgaWQ6IDEzLCBuYW1lOiBcIkNpbGxlc3NlblwiLCByb2xlOiBcIkdvYWxrZWVwZXJcIiB9LFxuICAgICAgICB7IGlkOiAxNCwgbmFtZTogXCJNYXNjaGVyYW5vXCIsIHJvbGU6IFwiRGVmZW5kZXJcIiB9LFxuICAgICAgICB7IGlkOiAxNywgbmFtZTogXCJQYWNvIEFsY8OhY2VyXCIsIHJvbGU6IFwiRm9yd2FyZFwiIH0sXG4gICAgICAgIHsgaWQ6IDE4LCBuYW1lOiBcIkpvcmRpIEFsYmFcIiwgcm9sZTogXCJEZWZlbmRlclwiIH0sXG4gICAgICAgIHsgaWQ6IDE5LCBuYW1lOiBcIkRpZ25lXCIsIHJvbGU6IFwiRGVmZW5kZXJcIiB9LFxuICAgICAgICB7IGlkOiAyMCwgbmFtZTogXCJTZXJnaSBSb2JlcnRvXCIsIHJvbGU6IFwiTWlkZmllbGRlclwiIH0sXG4gICAgICAgIHsgaWQ6IDIxLCBuYW1lOiBcIkFuZHLDqSBHb21lc1wiLCByb2xlOiBcIk1pZGZpZWxkZXJcIiB9LFxuICAgICAgICB7IGlkOiAyMiwgbmFtZTogXCJBbGVpeCBWaWRhbFwiLCByb2xlOiBcIk1pZGZpZWxkZXJcIiB9LFxuICAgICAgICB7IGlkOiAyMywgbmFtZTogXCJVbXRpdGlcIiwgcm9sZTogXCJEZWZlbmRlclwiIH0sXG4gICAgICAgIHsgaWQ6IDI0LCBuYW1lOiBcIk1hdGhpZXVcIiwgcm9sZTogXCJEZWZlbmRlclwiIH0sXG4gICAgICAgIHsgaWQ6IDI1LCBuYW1lOiBcIk1hc2lwXCIsIHJvbGU6IFwiR29hbGtlZXBlclwiIH0sXG4gICAgXTtcblxuICAgIGdldEl0ZW1zKCk6IEl0ZW1bXSB7XG4gICAgICAgIHJldHVybiB0aGlzLml0ZW1zO1xuICAgIH1cblxuICAgIGdldEl0ZW0oaWQ6IG51bWJlcik6IEl0ZW0ge1xuICAgICAgICByZXR1cm4gdGhpcy5pdGVtcy5maWx0ZXIoaXRlbSA9PiBpdGVtLmlkID09PSBpZClbMF07XG4gICAgfVxufVxuIl19