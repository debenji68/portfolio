import tkinter 
import string
import random

#variable globale
lgFen=720
hFen=480
couleurDeFonds='#406599'

def generer_mdp():
    """
    fonction de génération de mot de passe aléatoire
    RETURNS , TYPE None
    """
    mdp_mini=6 #nb mini de caractère
    mdp_maxi=18 #nb maxi de caractère
    caracteres_autorises=string.ascii_letters+string.punctuation+string.digits #on prend tout le code ascii + ponctuation + nombre.
    mdp="".join(random.choice(caracteres_autorises) for x in range (random.randint(mdp_mini,mdp_maxi)))
    champ_mdp.delete(0,'end')#on efface le mot de passe s'il y a quelque chose dedans
    champ_mdp.insert(0,mdp)#on insert le mot de passe à l'indice 0
    return None

#Création de la fenêtre
window= tkinter.Tk()
window.title(" Générateur de mot de passe") #titre de la fenêtre
window.geometry(str(lgFen)+"x"+str(hFen)) #dimensions de la fenêtre
window.config(background='#406599') #couleur du fond en RGB enhexadécimal

#création de la frame principale
frame=tkinter.Frame(window,bg=couleurDeFonds)

#afficher le frame
frame.pack(expand='yes')

#creation d'image
img=tkinter.PhotoImage(file='login2.png').zoom(1).subsample(2)

largeur=300 #px
hauteur=300 #px
canvas=tkinter.Canvas(frame,width=lgFen//2,height=hFen,bg=couleurDeFonds,bd=0,highlightthickness=0) #espace pour création graphique, bd et highlightthickness servent à supprimer la bordure du canvas
canvas.create_image(lgFen//4,hFen//2,image=img)#Coordonnées du centre de l'image
canvas.grid(row=0,column=0) #On utilise une grille au lieu de pack pour placer les éléments à gauche et droite de la fenêtre : row=ligne et column=colonne

#On place la sous boite à droite de l'image
frame_droite=tkinter.Frame(frame,bg=couleurDeFonds)
frame_droite.grid(row=0,column=1)

#Création du titre
titre=tkinter.Label(frame_droite,text="Mot de passe",font=("Courrier",20),bg=couleurDeFonds,fg='#FFFFFF')
titre.pack()

#Création du champ pour la saisie du mot de passe
champ_mdp=tkinter.Entry(frame_droite,font=("Courier",20),bg=couleurDeFonds,fg='#FFFFFF') 
champ_mdp.pack()

#Création du bouton
BP_mdp=tkinter.Button(frame_droite,text="Générer le mot de passe",font=("Courrier",20),bg=couleurDeFonds,fg='#FFFFFF',command=generer_mdp)
BP_mdp.pack(fill=tkinter.BOTH,pady=20)

#Création d'une barre de menu
menu_barre=tkinter.Menu(window)

#Créer un premier menu
menu_fichier=tkinter.Menu(menu_barre,tearoff=0) #menu fichier non détachable tearoff=0
menu_fichier.add_command(label="Nouveau",command=generer_mdp) #élément du menu fichier
menu_fichier.add_command(label="Quitter",command=window.destroy) #élément du menu fichier
menu_barre.add_cascade(label="Fichier",menu=menu_fichier) #élément de la barre de menu

#configurer notre fenêtre pour ajouter cette barre
window.config(menu=menu_barre)

#afficher la fenêtre
window.mainloop()