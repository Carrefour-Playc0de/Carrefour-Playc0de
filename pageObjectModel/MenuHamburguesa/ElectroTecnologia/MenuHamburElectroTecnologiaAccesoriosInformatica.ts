import { Page, BrowserContext, Locator, expect } from '@playwright/test'
import { BasePage } from '../../commonActions'
import { loadEnvironmentConfig, loadTestDataConfig } from '../../../config/configLoader'

export class MenuHamburElectroTecnologiaAccesoriosInformatica extends BasePage {

    readonly ACCESORIOS_INFORMATICA: Locator

    private env: any

    constructor(page: Page, context: BrowserContext, environment: string) {
        super(page, context)
        this.env = loadEnvironmentConfig(environment)

        this.ACCESORIOS_INFORMATICA = this.page.locator('//a [@id="menu-item-category-accesorios-informatica"]')
    }

    async clickElectroTecnologiaAccesoriosInformatica(): Promise<void> {
        await this.click(this.ACCESORIOS_INFORMATICA)
        await this.page.waitForLoadState("domcontentloaded")
        await this.page.waitForFunction(() => document.readyState === 'complete')
    }

    async navigateToMenuHamburElectroTecnologiaAccesoriosInformatica(): Promise<void> {
        await this.clickElectroTecnologiaAccesoriosInformatica()
    }
}
