from fastapi import FastAPI 
import requests
app = FastAPI()


@app.get("/health")
async def health_check():
    return {"status": "ok"}

@app.post("/getService")
async def llm(input_data: dict):  # Modify the function signature to accept InputData
    # print(input_data)
    data = {
        "contents": [
            {
                "parts": [
                    {
                        "text": "Can you please recommend AWS services and provide an estimated total monthly cost?" + str(input_data)
                    }
                ]
            }
        ]
    }

    # Define the API URL and API key
    api_url = "https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent"
    api_key = "AIzaSyB4edclWZO5Jhhadn0UAhWu_MGDEPbm64k"

    # Define headers
    headers = {
        "Content-Type": "application/json"
    }

    # Send the POST request
    response = requests.post(f"{api_url}?key={api_key}", json=data, headers=headers)

        
    if(response):
        response_json = response.json()  # Parse JSON response
        main_content = response_json["candidates"][0]["content"]["parts"][0]["text"]  # Extract main content
        model_response= main_content.replace('*', '')
        print(model_response)
        
        
    # Parse the response and generate JSON dynamically
        services = {}
        estimated_monthly_cost = {}
        additional_notes = []
        
        for line in model_response.split('\n'):
            if ":" in line:
                key, value = line.split(":", 1)
                key = key.strip()
                value = value.strip()
                if value != "":
                    if "$" in value:  # Check if value is a cost
                        estimated_monthly_cost[key] = value
                    else:
                        services[key] = value
            elif line.strip() != "":
                additional_notes.append(line.strip())

        # Construct the JSON response with non-empty sections
        json_response = {}

        # Include "AWS Services" if it has values
        if services:
            json_response["AWS Services"] = services

        # Include "Estimated Monthly Cost" if it has values
        if estimated_monthly_cost:
            json_response["Estimated Monthly Cost"] = estimated_monthly_cost

        # Include "Additional Notes" only if it is not empty
        if additional_notes:
            json_response["Additional Notes"] = additional_notes  # Convert dictionary keys to list



        if services and estimated_monthly_cost and additional_notes:
            json_response = {
                "AWS Services": services,
                "Estimated Monthly Cost": estimated_monthly_cost,
                "Additional Notes": additional_notes
            }
        
        return json_response
            
    else:
        print("Some Error happened, check LLM API IS WORKING")
            
    

if __name__ == "__main__":
    import uvicorn
    #uvicorn.run(app, host="0.0.0.0", port=9000)
    uvicorn.run(app, host="localhost", port=9000)
