# Data Formats

Ozone data undergo several processing stages and are categorized into the following levels:

## Level 0 (Raw Observational Data)

- Recorded manually in observation sheets
- Includes time, measurement type, limb readings, temperature, and weather conditions

## Level 1 (Digital Raw Data)

- **vtx files** — text blocks containing measurement type, temperature, limb readings, and operator comments
- Stored in monthly directories

## Level 2 (Processed Data)

- **voz files** — include date, time, measurement type, limb readings, and calculated TOC values (in Dobson Units)
- Used for time series analysis, daily averages, and seasonal trend studies

With updated software, additional files in the format `*.NNN` (e.g., `*.123` for the current instrument) are generated. These contain direct instrument readings, calculated TOC values, and calibration tables.

## Umkehr Observations

Umkehr observations, which contain vertical ozone distribution, have similar raw data at Level 0 as TCO measurements, but are always conducted in the **C wavelength band** during morning or evening hours.

Processing of Umkehr data is performed using specialized semi-automated software requiring expert oversight. The resulting vertical ozone profile is stored in **URZ files**, which include a header and structured measurement blocks.
