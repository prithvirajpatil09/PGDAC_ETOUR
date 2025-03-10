using E_Tour.Service;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Mvc;

namespace E_Tour.Controllers
{
    [ApiController]
    [Route("/api/subcategory")]
    [EnableCors("AllowReactApp")]
    public class Itenary2 : Controller
    {
        private readonly IItenaryService _itenaryService;

        private readonly IDepartureDatesService _departureDates;

        public Itenary2(IItenaryService itenaryservice, IDepartureDatesService departuredates)
        {
            _itenaryService = itenaryservice;
            _departureDates = departuredates;
        }

        [HttpGet("tours/itenary")]
        public async Task<IActionResult> GetItenary(String? lang = "en")
        {
            var details = await _itenaryService.GetItenaryDetailsByLanguageAsync(7, lang);
            Console.WriteLine("Selected TourId = " + 7);
            if (details != null)
            {
                return Ok(details);
            }
            return NotFound();
        }

        [HttpGet("departures")]
        public async Task<ActionResult<List<String>>> GetDepartureDatesByTourIdAsync()
        {
            var dates = await _departureDates.getDepartureDatesById(7);
            Console.WriteLine("Dates = " + dates);
            return Ok(dates);

        }
    }
}
