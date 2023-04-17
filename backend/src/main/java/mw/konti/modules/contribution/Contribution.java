package mw.konti.modules.contribution;

import mw.konti.modules.people.Person;
import mw.konti.modules.project.Project;
import java.util.Date;

public record Contribution(long id, Project contributedFor, Person contributor, long amount, Date contributedOn, String contributedVia,
boolean acknowledged,Date createdAt, Date updatedAt,boolean thankYouEmailSent
) {
    
}
