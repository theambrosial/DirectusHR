

class Roles:
    CRM = 'Client RelationShip Manager'
    RECR_IH = 'Recruiter (In-house)'
    RECR_FR = 'Recruiter (Freelancer)'
    CLIENT = 'Client'
    CANDIDATE = 'Candidate'

    available_roles = (
        (CRM, 'Client RelationShip Manager'),
        (RECR_IH, 'Recruiter (In-house)'),
        (RECR_FR, 'Recruiter (Freelancer)'),
        (CLIENT, 'Client'),
        (CANDIDATE, 'Candidate'),
    )


class Relations:

    FULL_TIME_ON_ROLL = "Full Time - On Roll"
    PART_TIME_ON_ROLL = "Part Time - On Roll"
    WFH_ON_ROLL = "Work From Home - On Roll"
    FULL_TIME_OFF_ROLL = "Full Time - Off Rolls"
    PART_TIME_OFF_ROLL = "Part Time - Off Rolls"
    WFH_OFF_ROLE = "Work From Home - Off Rolls"
    INTERNSHIP = "Internship"
    SHORT_TERM_CONTRACT = "Short Term Contract"

    available_relations = (
          (FULL_TIME_ON_ROLL, "Full Time - On Roll"),
          (PART_TIME_ON_ROLL, "Part Time - On Roll"),
          (WFH_ON_ROLL, "Work From Home - On Roll"),
          (FULL_TIME_OFF_ROLL, "Full Time - Off Rolls"),
          (PART_TIME_OFF_ROLL, "Part Time - Off Rolls"),
          (WFH_OFF_ROLE, "Work From Home - Off Rolls"),
          (INTERNSHIP, "Internship"),
          (SHORT_TERM_CONTRACT, "Short Term Contract"),
    )

    ON_ROLL_RELATIONS = (FULL_TIME_ON_ROLL, PART_TIME_ON_ROLL, WFH_ON_ROLL)

available_business_types = (
    ('Public Listed Company', 'Public Listed Company'),
    ('Pvt. Ltd. Company', 'Pvt. Ltd. Company'),
    ('LLP', 'LLP'),
    ('Partnership Firm', 'Partnership Firm'),
    ('Proprietary Firm', 'Proprietary Firm'),
    ('NGO', 'NGO'),
)

available_company_sizes = (
    ('0 - 10 Employees', '0 - 10 Employees'),
    ('10 - 100 Employees', '10 - 100 Employees'),
    ('100 - 300 Employees', '100 - 300 Employees'),
    ('300 - 500 Employees', '300 - 500 Employees'),
    ('500-1000 Employees', '500-1000 Employees'),
    ('1000+ Employees', '1000+ Employees'),
)

available_interview_status = (
    ('Pending', 'Pending'),
    ('Selected', 'Selected'),
    ('Rejected', 'Rejected'),
    ('On Hold', 'On Hold'),
)