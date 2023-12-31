import { Page, BrowserContext, Locator, expect } from '@playwright/test'
import { BasePage } from '../../../commonActions'
import { loadEnvironmentConfig, loadTestDataConfig } from '../../../../config/configLoader'

export class LPFVerTodosLecheUATParciaDescCarrefourClassicBrik1Lt extends BasePage {

    readonly LECHE_UAT_DESC_CARREFOUR: Locator

    private env: any

    constructor(page: Page, context: BrowserContext, environment: string) {
        super(page, context)
        this.env = loadEnvironmentConfig(environment)

        this.LECHE_UAT_DESC_CARREFOUR = this.page.locator('//span[contains(text(),"Leche UAT parcialmente descremada Carrefour classi")]')
    }

    async clickLPFVerTodosLecheUATParciaDescCarrefourClassicBrik1Lt(): Promise<void> {
        await this.click(this.LECHE_UAT_DESC_CARREFOUR)
        await this.page.waitForLoadState("domcontentloaded")
        await this.page.waitForFunction(() => document.readyState === 'complete')
        // await this.page.waitForTimeout(3000)
    }

    async navigateToLPFVerTodosLecheUATParciaDescCarrefourClassicBrik1Lt(): Promise<void> {
        await this.clickLPFVerTodosLecheUATParciaDescCarrefourClassicBrik1Lt()
    }
}
