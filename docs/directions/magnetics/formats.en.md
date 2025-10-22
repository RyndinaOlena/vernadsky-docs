# Data Formats (Geomagnetic Data)

- Basic format for variation data: **IAGA-2002** (second/minute/daily series).
- Requirements and practices of the **INTERMAGNET** network — see the _Technical Reference Manual_: <https://tech-man.intermagnet.org/stable/>

**Category 2 datasets** (after processing):

- variation records cleaned from artifacts;
- baseline derived from absolute measurements;
- **K-indices** (from magnetograms; rules defined in the INTERMAGNET TRM).

> Limitation of traditional daily files: second- and minute-resolution series do not exceed one day.  
> **Our approach**: generate a **continuous array of one-second measurements** for arbitrary time intervals and resampling.
