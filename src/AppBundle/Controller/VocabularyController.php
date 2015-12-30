<?php

namespace AppBundle\Controller;

use AppBundle\Entity\Vocable;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Symfony\Component\HttpFoundation\Request;

class VocabularyController extends Controller
{
    /**
     * @param Request $request
     * @return array
     */
    public function postAction(Request $request)
    {
        $vocabulary = new Vocable();
        $vocabulary->setSourceLanguage($request->get('sourceLanguage'));
        $vocabulary->setSource($request->get('source'));
        $vocabulary->setTargetLanguage($request->get('targetLanguage'));
        $vocabulary->setTarget($request->get('target'));

        $this->getDoctrine()->getManager()->persist($vocabulary);
        $this->getDoctrine()->getManager()->flush();

        return [
            'id' => $vocabulary->getId()
        ];
    }

    /**
     * @return \AppBundle\Entity\Vocable[]|array
     */
    public function listAction()
    {
        return $this->getDoctrine()->getRepository(Vocable::class)->findAll();
    }
}
