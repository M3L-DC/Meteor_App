import { Template } from 'meteor/templating';
import DataBase from '../imports/db';

Template.form.events (
    {
        'click .btn'(event, template){
            event.preventDefault();

            var nom = template.find('.nom').value;
            var prenom = template.find('.prenom').value;
            var lien = template.find('.lien').value;
            
            if(nom && prenom && lien){
                console.log(nom +"; "+prenom+"; "+lien);
                var id = DataBase.insert
                (
                    {
                         firstName: nom,
                         lastName: prenom,
                         github: lien,
                    }
                )
                console.log(id);
                    
            }
            else
            {
                console.log("Ce champs n'est pas rempli !")
            }
        }
    }
)

Template.form.helpers
(
    {
        list: DataBase.find()
    }
)