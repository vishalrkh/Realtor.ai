@RestController
@RequestMapping("/api")
public class PrefillController {
    @PostMapping("/prefill")
    public ResponseEntity<FormSuggestions> prefill(@RequestBody PrefillRequest request) {
        // Call external AI API with speech + formData
        // Parse response, map to form fields
        FormSuggestions suggestions = aiService.getSuggestions(request.getTranscript(), request.getFormData());
        return ResponseEntity.ok(suggestions);
    }
}