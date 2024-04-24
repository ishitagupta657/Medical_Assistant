Dataset: symptom2disease.csv


## Instruction 



Backend
```
git clone <repository-url>
cd <project-directory>
npm install
npm run start
```


---


Frontend
```
cd <project-directory>
cd client
npm install
npm run start
```

---


## Configuration

- MongoDB URL: Uses the `DB_URL` environment variable. Defaults to `mongodb://localhost:27017/mydatabase` if not provided.
- Port: Listens on the `PORT` environment variable. Defaults to `3000` if not set.

---



# Medical Assistant API Collection


This Postman collection contains endpoints for interacting with the Medical Assistant API.

## Endpoints

1. **Get Possible Diseases**
   - **Description:** Retrieves possible diseases based on symptoms.
   - **Method:** POST
   - **Endpoint:** `localhost:3000/v1/disease`
   - **Body:** `{"symptoms": "stomach pain"}`

2. **Get All Doctors**
   - **Description:** Retrieves all doctors.
   - **Method:** GET
   - **Endpoint:** `localhost:3000/v1/doctor`

3. **Create An Appointment**
   - **Description:** Creates a new appointment.
   - **Method:** POST
   - **Endpoint:** `localhost:3000/v1/appointment`
   - **Body:** `{"doctor_id": "611234567890123456789012", "patient_mobile_number": "123-456-7890", "time": "2024-04-24T10:00:00Z"}`

4. **Get Doctors Appointments**
   - **Description:** Retrieves appointments for a specific doctor.
   - **Method:** GET
   - **Endpoint:** `localhost:3000/v1/appointment`
   - **Query Parameters:** `doctor_id=611234567890123456789012`

5. **Delete Appointment**
   - **Description:** Deletes an appointment.
   - **Method:** DELETE
   - **Endpoint:** `localhost:3000/v1/appointment`
   - **Query Parameters:** `id=662799e12c1815f8ceae638d`

6. **Rate Doctor**
   - **Description:** Deletes an appointment.
   - **Method:** PATCH
   - **Endpoint:** `localhost:3000/v1/appointment`
   - **Body:** `{"doctor_id": "611234567890123456789012", "rating": 1}`

## Usage

1. Import this collection into Postman using the provided Postman ID or Collection Link.
2. Set up your environment variables for local development or use the provided endpoint URLs.
3. Use the provided endpoints with the appropriate methods and payloads as described above.

---