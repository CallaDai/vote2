/* --- On document ready --- */
$(function () {

    /* --- Content Click Handler --- */
    $(".content").on("click", (event) => {
        let element = event.currentTarget;
        let counter = $(element).find(".counter");

        let countValue = parseInt(counter.text());
        countValue += 1;
        counter.text(countValue);
    });

    $("#resetBtn").on("click", () => {
        let counters = $(".content").find("span");
        counters.text("0");
        counters.hide();
    });

    $("#showBtn").on("click", () => {
        let counters = $(".counter");
        counters.toggle();
		if(counters.eq(0).is(":hidden"))
		{
			$("#showBtn").text("Show Results")
		}else{
			$("#showBtn").text("Hide Results")
		}
    });
});