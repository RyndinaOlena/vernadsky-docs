# Data Formats

## Archive Data

Data obtained **before 2004** is stored in **WDC** format.

## Modern Formats

Final data obtained **since 2004** are stored in **INTERMAGNET** formats: IAF, IYF, IAGA-2002.

Description of these formats is provided here:

- <https://tech-man.intermagnet.org/stable/appendices/archivedataformats.html>
- <https://tech-man.intermagnet.org/stable/appendices/dataformats.html>

For data transfer to INTERMAGNET, the **IMF** format is used.

## Data from Variometers

### LEMI-025

Averaged data are provided in **IAGA-2002** format with time resolution:

- **1 second**: `AIAYYYYMMDDv.sec`
- **1 minute**: `AIAYYYYMMDDv.min`

Raw data with time resolution of **0.1 second** are provided in a proprietary text format: `AIAYYYYMMDDv.txt`

### LEMI-008

Averaged data are stored in a proprietary text format with time resolution of **1 minute**: `YYMMDD00.MAG`

## Data from Scalar Magnetometers

### PMP-8 and POS-1

Data are entered into an Excel table `ABS_BAS_MM.YYYY.xlsx`, where baselines are calculated using the so-called **method A**, and are exported from it into text files:

- `abs_YYYY_MM.txt`
- `baseline_YYYY_MM.txt`

Results from the `magdata1` and `abs-lemi025` programs (the so-called **method B**) are entered into the same table.

Since **2022**, the `abs` program has been used for this, which is standardly used at Polish and Ukrainian magnetic observatories.

### GSM-19 and GSM-90

Data are stored in their own proprietary text formats.

## Protocols and Reports

- **Absolute measurement protocols** are transmitted as scanned paper protocols in **PDF** format, as well as (if available) in text format.

- **Local K-indexes** for ISGI are contained in the file `Ki_MM_YYYY.txt`.

- **Text report** for the month with a description of the current status in Ukrainian is contained in the text file `Mag_YYYY_MM.txt`.
